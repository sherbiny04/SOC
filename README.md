# SOC Midterm — Workshop Management System

> A full-stack session and workshop management platform built with Node.js, Express, and MongoDB.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcrypt |
| Testing | Postman |
| Dev Tool | nodemon |

---

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/sherbiny04/SOC.git
cd SOC/backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the `backend/` folder:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=soc_midterm_secret_key_2025
```

### 4. Start the server
```bash
npm run dev
```

Server runs at `http://localhost:5000`

---

## API Endpoints

### Auth — `/api/auth`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |

### Sessions — `/api/sessions`
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/sessions` | Get all sessions |
| GET | `/api/sessions/:id` | Get session by ID |
| POST | `/api/sessions` | Create a session |
| PUT | `/api/sessions/:id` | Update a session |
| DELETE | `/api/sessions/:id` | Delete a session |

### Templates — `/api/templates`
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/templates` | Get all templates |
| GET | `/api/templates/:id` | Get template by ID |
| POST | `/api/templates` | Create a template |
| PUT | `/api/templates/:id` | Update a template |
| DELETE | `/api/templates/:id` | Delete a template |

### Participants — `/api/participants`
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/participants` | Get all participants |
| GET | `/api/participants/:id` | Get participant by ID |
| POST | `/api/participants` | Create a participant |
| PUT | `/api/participants/:id` | Update a participant |
| DELETE | `/api/participants/:id` | Delete a participant |

### Resources — `/api/resources`
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/resources` | Get all resources |
| GET | `/api/resources/:id` | Get resource by ID |
| POST | `/api/resources` | Create a resource |
| PUT | `/api/resources/:id` | Update a resource |
| DELETE | `/api/resources/:id` | Delete a resource |

### Dashboard — `/api/dashboard`
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/dashboard/stats` | Get aggregated stats |

---

## Query Parameters

| Param | Applies To | Description |
|---|---|---|
| `page` | All GET lists | Page number (default: 1) |
| `limit` | All GET lists | Items per page (default: 10) |
| `sortBy` | All GET lists | Field to sort by (default: createdAt) |
| `order` | All GET lists | `asc` or `desc` (default: desc) |
| `status` | Sessions | Filter by Upcoming / Completed / Cancelled |
| `category` | Templates | Filter by Agile / Operations / Strategy / Design |
| `role` | Participants | Filter by Facilitator / Contributor / Observer / Admin |
| `type` | Resources | Filter by PDF / PPTX / DOCX / Link |

---

## Response Format

### Success
```json
{
  "success": true,
  "data": {},
  "count": 5,
  "totalPages": 2,
  "currentPage": 1
}
```

### Error
```json
{
  "success": false,
  "message": "Error description"
}
```

---

## Folder Structure

```
SOC/
├── frontend/
└── backend/
    ├── index.js
    ├── .env
    ├── package.json
    ├── config/
    │   └── db.js
    ├── models/
    │   ├── Session.js
    │   ├── Template.js
    │   ├── Participant.js
    │   ├── Resource.js
    │   └── User.js
    ├── routes/
    │   ├── auth.js
    │   ├── sessions.js
    │   ├── templates.js
    │   ├── participants.js
    │   ├── resources.js
    │   └── dashboard.js
    ├── controllers/
    │   ├── authController.js
    │   ├── sessionController.js
    │   ├── templateController.js
    │   ├── participantController.js
    │   ├── resourceController.js
    │   └── dashboardController.js
    ├── middleware/
    │   ├── auth.js
    │   └── validate.js
    └── postman/
        ├── SOC_Sessions_CRUD.postman_collection.json
        ├── SOC_Templates_CRUD.postman_collection.json
        ├── SOC_Auth.postman_collection.json
        └── SOC_Dashboard.postman_collection.json
```

---

## Importing Postman Collections

1. Open Postman
2. Click **Import** in the top left
3. Drag and drop any `.json` file from the `backend/postman/` folder
4. The collection will appear in your sidebar ready to run

---

## Team

| Member | Role |
|---|---|
| Hadi | Project setup, models, Postman, frontend integration |
| Marwan | Models, routes/controllers, auth system |
| Anas | API endpoints, filters, pagination, error handling |
| Sherbiny | Code review, integration testing, QA |
