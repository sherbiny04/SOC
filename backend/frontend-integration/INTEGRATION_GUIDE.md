# Frontend Integration Guide

## Step 1 — Add api.js to dashboard.html

In `dashboard.html`, add this script tag just before the closing `</script>` tag at the bottom:

```html
<script src="../backend/frontend-integration/api.js"></script>
```

---

## Step 2 — Load data from API on startup

In `dashboard.html`, find this line at the very bottom of the `<script>` block:

```js
refreshOverview();
```

Replace it with:

```js
loadAllEntities().then(() => {
  refreshOverview();
  loadDashboardStats();
});
overrideCrudFormSubmit();
overrideDeleteHandler();
```

---

## Step 3 — Connect login.html to the API

In `login.html`, find the login button:

```html
<a href="dashboard.html" class="block text-center w-full ...">
    Log in
</a>
```

Replace it with:

```html
<button type="button" id="login-btn" class="block text-center w-full bg-brand-yellow border-2 border-brand-dark rounded-xl py-4 px-8 font-display font-bold text-xl shadow-[4px_4px_0px_0px_rgba(27,28,51,1)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(27,28,51,1)] transition-all mt-4">
    Log in
</button>
```

Then add this script before `</body>`:

```html
<script src="../backend/frontend-integration/api.js"></script>
<script>
  document.getElementById('login-btn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const json = await apiLogin({ email, password });
    if (json.success || json.token) {
      setToken(json.token);
      window.location.href = 'dashboard.html';
    } else {
      alert(json.message || 'Login failed.');
    }
  });
</script>
```

---

## Step 4 — Connect signup.html to the API

In `signup.html`, find the create account button:

```html
<a href="dashboard.html" class="w-full bg-brand-pink ...">
    <span>Create account</span>
    ...
</a>
```

Replace it with:

```html
<button type="button" id="signup-btn" class="w-full bg-brand-pink border-2 border-brand-dark rounded-xl py-4 mt-8 font-display font-bold text-xl shadow-[4px_4px_0px_0px_rgba(27,28,51,1)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(27,28,51,1)] transition-all flex items-center justify-center space-x-2">
    <span>Create account</span>
    <i data-lucide="arrow-right" class="w-5 h-5"></i>
</button>
```

Then add this script before `</body>`:

```html
<script src="../backend/frontend-integration/api.js"></script>
<script>
  document.getElementById('signup-btn').addEventListener('click', async () => {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const json = await apiRegister({ firstName, lastName, email, password });
    if (json.success || json.token) {
      setToken(json.token);
      window.location.href = 'dashboard.html';
    } else {
      alert(json.message || 'Registration failed.');
    }
  });
</script>
```
