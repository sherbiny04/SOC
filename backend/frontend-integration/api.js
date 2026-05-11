const API_BASE = 'http://localhost:5000/api';

function getToken() { return localStorage.getItem('token'); }
function setToken(t) { localStorage.setItem('token', t); }
function removeToken() { localStorage.removeItem('token'); }
function authHeaders() {
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` };
}

async function apiRegister(data) {
  const res = await fetch(`${API_BASE}/auth/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  return res.json();
}

async function apiLogin(data) {
  const res = await fetch(`${API_BASE}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  return res.json();
}

async function apiGetAll(entity) {
  const res = await fetch(`${API_BASE}/${entity}`, { headers: authHeaders() });
  return res.json();
}

async function apiGetById(entity, id) {
  const res = await fetch(`${API_BASE}/${entity}/${id}`, { headers: authHeaders() });
  return res.json();
}

async function apiCreate(entity, data) {
  const res = await fetch(`${API_BASE}/${entity}`, { method: 'POST', headers: authHeaders(), body: JSON.stringify(data) });
  return res.json();
}

async function apiUpdate(entity, id, data) {
  const res = await fetch(`${API_BASE}/${entity}/${id}`, { method: 'PUT', headers: authHeaders(), body: JSON.stringify(data) });
  return res.json();
}

async function apiDelete(entity, id) {
  const res = await fetch(`${API_BASE}/${entity}/${id}`, { method: 'DELETE', headers: authHeaders() });
  return res.json();
}

async function apiGetDashboardStats() {
  const res = await fetch(`${API_BASE}/dashboard/stats`, { headers: authHeaders() });
  return res.json();
}

const entityRoutes = {
  sessions: 'sessions',
  templates: 'templates',
  participants: 'participants',
  resources: 'resources'
};

async function loadEntityData(entityKey) {
  const json = await apiGetAll(entityRoutes[entityKey]);
  if (json.success && json.data) {
    entities[entityKey].items = json.data.map(item => ({ ...item, id: item._id }));
  }
}

async function loadAllEntities() {
  for (const key of Object.keys(entityRoutes)) {
    await loadEntityData(key);
  }
}

async function loadDashboardStats() {
  const json = await apiGetDashboardStats();
  if (json.success) {
    document.getElementById('kpi-total-sessions').textContent = json.totalSessions ?? 0;
    document.getElementById('kpi-upcoming').textContent = json.upcomingSessions ?? 0;
    document.getElementById('kpi-completed').textContent = json.completedSessions ?? 0;
    document.getElementById('kpi-participants').textContent = json.totalParticipants ?? 0;
  }
}

function overrideCrudFormSubmit() {
  const form = document.getElementById('entity-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const config = entities[activePage];
    const data = {};
    config.fields.forEach(field => {
      data[field.key] = form.elements[field.key].value;
    });

    let json;
    if (editingId) {
      json = await apiUpdate(entityRoutes[activePage], editingId, data);
    } else {
      json = await apiCreate(entityRoutes[activePage], data);
    }

    if (json.success) {
      await loadEntityData(activePage);
      editingId = null;
      form.reset();
      document.getElementById('crud-form-panel').classList.add('hidden');
      renderForm();
      renderTable();
    } else {
      alert(json.message || 'Something went wrong.');
    }
  });
}

function overrideDeleteHandler() {
  const tableBody = document.getElementById('table-body');
  tableBody.addEventListener('click', async (e) => {
    const deleteBtn = e.target.closest('[data-delete]');
    if (deleteBtn) {
      e.stopImmediatePropagation();
      if (confirm('Are you certain you want to remove this item? This action cannot be undone.')) {
        const id = deleteBtn.dataset.delete;
        const json = await apiDelete(entityRoutes[activePage], id);
        if (json.success) {
          await loadEntityData(activePage);
          renderTable();
        } else {
          alert(json.message || 'Delete failed.');
        }
      }
    }
  }, true);
}
