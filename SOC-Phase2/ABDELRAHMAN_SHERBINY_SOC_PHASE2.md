# Participants Microservice — Documentation
**Author:** Abdelrahman Sherbiny (Team Lead)  
**Port:** 3003  
**Project:** SOC Phase 2 — Workshop/Session Management System  
**University:** ESLSCA University | May 2026

---

## Overview

The Participants Microservice is a standalone NestJS application responsible for managing all participant data in the SOC Workshop/Session Management System. It exposes a REST API on port 3003 and is accessible via the API Gateway on port 3000.

---

## Schema

**Collection:** `participants`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `_id` | ObjectId | Auto | MongoDB document ID |
| `name` | String | Yes | Full name of the participant |
| `email` | String | Yes | Must be unique across all participants |
| `role` | String (enum) | Yes | One of: `student`, `instructor`, `admin`, `observer` |
| `phone` | String | No | Optional phone number |
| `createdAt` | Date | Auto | Mongoose timestamps |
| `updatedAt` | Date | Auto | Mongoose timestamps |

**Enum values for `role`:**
- `student`
- `instructor`
- `admin`
- `observer`

---

## Endpoints

Base URL (direct): `http://localhost:3003`  
Base URL (via gateway): `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/participants` | Create a new participant |
| `GET` | `/participants` | Get all participants (supports filtering, pagination, sorting) |
| `GET` | `/participants/:id` | Get a single participant by ID |
| `PATCH` | `/participants/:id` | Update a participant by ID |
| `DELETE` | `/participants/:id` | Delete a participant by ID |

---

## Query Parameters

### Filtering
| Param | Type | Example | Description |
|-------|------|---------|-------------|
| `role` | string | `?role=instructor` | Filter by participant role |

### Pagination
| Param | Type | Default | Example | Description |
|-------|------|---------|---------|-------------|
| `page` | number | `1` | `?page=2` | Page number |
| `limit` | number | `10` | `?limit=5` | Items per page |

### Sorting
| Param | Type | Default | Example | Description |
|-------|------|---------|---------|-------------|
| `sortBy` | string | `createdAt` | `?sortBy=name` | Field to sort by |
| `order` | string | `desc` | `?order=asc` | Sort direction: `asc` or `desc` |

**Example combined query:**
```
GET /participants?role=student&page=1&limit=10&sortBy=name&order=asc
```

---

## Sample Requests & Responses

### POST /participants — Create Participant

**Request:**
```json
{
  "name": "Ahmed Ali",
  "email": "ahmed.ali@example.com",
  "role": "student",
  "phone": "+201001234567"
}
```

**Response (201 Created):**
```json
{
  "_id": "683a1f2b4e1d2c3a4b5c6d7e",
  "name": "Ahmed Ali",
  "email": "ahmed.ali@example.com",
  "role": "student",
  "phone": "+201001234567",
  "createdAt": "2026-05-12T10:00:00.000Z",
  "updatedAt": "2026-05-12T10:00:00.000Z",
  "__v": 0
}
```

---

### GET /participants — Get All (with filters)

**Request:**
```
GET /participants?role=instructor&page=1&limit=5&sortBy=name&order=asc
```

**Response (200 OK):**
```json
{
  "data": [
    {
      "_id": "683a1f2b4e1d2c3a4b5c6d7e",
      "name": "Dr. Sara Hassan",
      "email": "sara.hassan@example.com",
      "role": "instructor",
      "phone": "+201112345678",
      "createdAt": "2026-05-12T09:00:00.000Z",
      "updatedAt": "2026-05-12T09:00:00.000Z"
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 5,
  "totalPages": 1
}
```

---

### GET /participants/:id — Get by ID

**Response (200 OK):**
```json
{
  "_id": "683a1f2b4e1d2c3a4b5c6d7e",
  "name": "Ahmed Ali",
  "email": "ahmed.ali@example.com",
  "role": "student",
  "phone": "+201001234567",
  "createdAt": "2026-05-12T10:00:00.000Z",
  "updatedAt": "2026-05-12T10:00:00.000Z"
}
```

**Response (404 Not Found):**
```json
{
  "statusCode": 404,
  "message": "Participant with id 683a1f2b4e1d2c3a4b5c6d7e not found",
  "error": "Not Found"
}
```

---

### PATCH /participants/:id — Update Participant

**Request:**
```json
{
  "role": "instructor",
  "phone": "+201009876543"
}
```

**Response (200 OK):**
```json
{
  "_id": "683a1f2b4e1d2c3a4b5c6d7e",
  "name": "Ahmed Ali",
  "email": "ahmed.ali@example.com",
  "role": "instructor",
  "phone": "+201009876543",
  "createdAt": "2026-05-12T10:00:00.000Z",
  "updatedAt": "2026-05-12T10:30:00.000Z"
}
```

---

### DELETE /participants/:id — Delete Participant

**Response (200 OK):** Returns the deleted document.

---

## Validation Rules (DTOs)

### CreateParticipantDto

| Field | Decorator | Rule |
|-------|-----------|------|
| `name` | `@IsString`, `@IsNotEmpty` | Required string |
| `email` | `@IsEmail`, `@IsNotEmpty` | Required valid email format |
| `role` | `@IsEnum(ParticipantRole)`, `@IsNotEmpty` | Must be one of the allowed roles |
| `phone` | `@IsString`, `@IsOptional` | Optional string |

### UpdateParticipantDto
Extends `CreateParticipantDto` with all fields optional via `PartialType`.

**Validation pipe settings (main.ts):**
- `transform: true` — automatically transforms payloads to DTO instances
- `whitelist: true` — strips unknown properties from requests

---

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/participants-service` |
| `PORT` | Port the service runs on | `3003` |

Create a `.env` file in the `participants-service/` root:
```
MONGO_URI=mongodb://localhost:27017/participants-service
PORT=3003
```

---

## Running the Service

```bash
cd SOC-Phase2/participants-service

# Install dependencies
npm install

# Development mode (with hot reload)
npm run start:dev

# Production build
npm run build
npm run start:prod
```

Service will be available at: `http://localhost:3003`

---

## Project Structure

```
participants-service/
├── src/
│   ├── participants/
│   │   ├── dto/
│   │   │   ├── create-participant.dto.ts
│   │   │   └── update-participant.dto.ts
│   │   ├── participant.schema.ts
│   │   ├── participants.controller.ts
│   │   ├── participants.module.ts
│   │   └── participants.service.ts
│   ├── app.module.ts
│   └── main.ts
├── .env
├── .env.example
├── nest-cli.json
├── package.json
├── tsconfig.json
└── tsconfig.build.json
```
