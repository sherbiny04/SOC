# SOC API Test Checklist

Use `{{BASE_URL}}` and `{{TOKEN}}` from the Postman environment.

---

## Sessions

| # | Method | Endpoint | Query Params | Pass | Fail | Notes |
|---|--------|----------|--------------|------|------|-------|
| 1 | POST | `{{BASE_URL}}/api/sessions` | — | [ ] | [ ] | Create a session |
| 2 | GET | `{{BASE_URL}}/api/sessions` | — | [ ] | [ ] | Get all sessions (default pagination) |
| 3 | GET | `{{BASE_URL}}/api/sessions` | `?status=upcoming` | [ ] | [ ] | Filter by status |
| 4 | GET | `{{BASE_URL}}/api/sessions` | `?startDate=2024-01-01&endDate=2024-12-31` | [ ] | [ ] | Filter by date range |
| 5 | GET | `{{BASE_URL}}/api/sessions` | `?page=1&limit=5` | [ ] | [ ] | Pagination |
| 6 | GET | `{{BASE_URL}}/api/sessions` | `?sortBy=date&order=asc` | [ ] | [ ] | Sorting |
| 7 | GET | `{{BASE_URL}}/api/sessions/:id` | — | [ ] | [ ] | Get session by ID |
| 8 | PUT | `{{BASE_URL}}/api/sessions/:id` | — | [ ] | [ ] | Update a session |
| 9 | DELETE | `{{BASE_URL}}/api/sessions/:id` | — | [ ] | [ ] | Delete a session |

---

## Templates

| # | Method | Endpoint | Query Params | Pass | Fail | Notes |
|---|--------|----------|--------------|------|------|-------|
| 10 | POST | `{{BASE_URL}}/api/templates` | — | [ ] | [ ] | Create a template |
| 11 | GET | `{{BASE_URL}}/api/templates` | — | [ ] | [ ] | Get all templates (default pagination) |
| 12 | GET | `{{BASE_URL}}/api/templates` | `?category=workshop` | [ ] | [ ] | Filter by category |
| 13 | GET | `{{BASE_URL}}/api/templates` | `?page=1&limit=5&sortBy=name&order=asc` | [ ] | [ ] | Pagination + sorting |
| 14 | GET | `{{BASE_URL}}/api/templates/:id` | — | [ ] | [ ] | Get template by ID |
| 15 | PUT | `{{BASE_URL}}/api/templates/:id` | — | [ ] | [ ] | Update a template |
| 16 | DELETE | `{{BASE_URL}}/api/templates/:id` | — | [ ] | [ ] | Delete a template |

---

## Participants

| # | Method | Endpoint | Query Params | Pass | Fail | Notes |
|---|--------|----------|--------------|------|------|-------|
| 17 | POST | `{{BASE_URL}}/api/participants` | — | [ ] | [ ] | Create a participant |
| 18 | GET | `{{BASE_URL}}/api/participants` | — | [ ] | [ ] | Get all participants (default pagination) |
| 19 | GET | `{{BASE_URL}}/api/participants` | `?role=student` | [ ] | [ ] | Filter by role |
| 20 | GET | `{{BASE_URL}}/api/participants` | `?page=1&limit=5&sortBy=name&order=asc` | [ ] | [ ] | Pagination + sorting |
| 21 | GET | `{{BASE_URL}}/api/participants/:id` | — | [ ] | [ ] | Get participant by ID |
| 22 | PUT | `{{BASE_URL}}/api/participants/:id` | — | [ ] | [ ] | Update a participant |
| 23 | DELETE | `{{BASE_URL}}/api/participants/:id` | — | [ ] | [ ] | Delete a participant |

---

## Resources

| # | Method | Endpoint | Query Params | Pass | Fail | Notes |
|---|--------|----------|--------------|------|------|-------|
| 24 | POST | `{{BASE_URL}}/api/resources` | — | [ ] | [ ] | Create a resource |
| 25 | GET | `{{BASE_URL}}/api/resources` | — | [ ] | [ ] | Get all resources (default pagination) |
| 26 | GET | `{{BASE_URL}}/api/resources` | `?type=video` | [ ] | [ ] | Filter by type |
| 27 | GET | `{{BASE_URL}}/api/resources` | `?page=1&limit=5&sortBy=title&order=asc` | [ ] | [ ] | Pagination + sorting |
| 28 | GET | `{{BASE_URL}}/api/resources/:id` | — | [ ] | [ ] | Get resource by ID |
| 29 | PUT | `{{BASE_URL}}/api/resources/:id` | — | [ ] | [ ] | Update a resource |
| 30 | DELETE | `{{BASE_URL}}/api/resources/:id` | — | [ ] | [ ] | Delete a resource |

---

## Dashboard

| # | Method | Endpoint | Query Params | Pass | Fail | Notes |
|---|--------|----------|--------------|------|------|-------|
| 31 | GET | `{{BASE_URL}}/api/dashboard/stats` | — | [ ] | [ ] | Aggregated stats (totals, upcoming, completed, participants, top template) |

---

## Response Format Reference

**Success:**
```json
{ "success": true, "data": ..., "total": 0, "page": 1, "limit": 10 }
```

**Error:**
```json
{ "success": false, "message": "..." }
```

---

## Query Param Reference

| Param | Applies To | Default | Example |
|-------|------------|---------|---------|
| `page` | All GET all | `1` | `?page=2` |
| `limit` | All GET all | `10` | `?limit=5` |
| `sortBy` | All GET all | `createdAt` | `?sortBy=name` |
| `order` | All GET all | `desc` | `?order=asc` |
| `status` | Sessions | — | `?status=upcoming` |
| `startDate` | Sessions | — | `?startDate=2024-01-01` |
| `endDate` | Sessions | — | `?endDate=2024-12-31` |
| `category` | Templates | — | `?category=workshop` |
| `role` | Participants | — | `?role=instructor` |
| `type` | Resources | — | `?type=video` |
