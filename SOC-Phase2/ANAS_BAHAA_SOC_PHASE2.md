# SOC Phase 2 - Anas Bahaa

Owner: Anas Bahaa

Services owned:

| Service | Port | Folder |
| --- | ---: | --- |
| API Gateway | 3000 | `api-gateway/` |
| Sessions Microservice | 3001 | external team service |
| Templates Microservice | 3002 | external team service |
| Participants Microservice | 3003 | external team service |
| Resources Microservice | 3004 | `resources-service/` |

## API Gateway Architecture

```text
Client / Postman
      |
      | HTTP + Bearer JWT
      v
+----------------------------+
| API Gateway :3000          |
| - Auth / JWT issuing       |
| - Global JWT guard         |
| - Proxy controllers        |
| - Dashboard aggregation    |
| - Global exception filter  |
+-------------+--------------+
              |
              +--> /sessions/*     -> http://localhost:3001/sessions/*
              +--> /templates/*    -> http://localhost:3002/templates/*
              +--> /participants/* -> http://localhost:3003/participants/*
              +--> /resources/*    -> http://localhost:3004/*
              |
              +--> /dashboard/stats calls all four services in parallel

MongoDB
  |
  +--> api-gateway users collection
  +--> resources-service resources collection
```

## JWT Auth Flow

1. Client calls `POST /auth/register` on the gateway with `email` and `password`.
2. Gateway lowercases the email, hashes the password with bcrypt, and stores `email` plus `passwordHash` in MongoDB.
3. Client calls `POST /auth/login` with the same credentials.
4. Gateway loads the user by email, compares the submitted password with bcrypt, and signs a JWT with:
   - `sub`: Mongo user id
   - `email`: user email
5. Client sends the token as `Authorization: Bearer <token>`.
6. The global JWT guard protects every route except `/auth/*`.
7. `JwtStrategy` validates the token using `JWT_SECRET` from `.env`.

## Environment

Gateway `.env`:

```env
MONGO_URI=mongodb://localhost:27017/soc_phase2_gateway
JWT_SECRET=replace-with-a-long-random-secret
JWT_EXPIRES_IN=1h
```

Resources `.env`:

```env
MONGO_URI=mongodb://localhost:27017/soc_phase2_resources
```

`.env` files are ignored by git. `.env.example` files are committed as templates.

## Gateway Forwarding

The gateway uses `HttpModule` through a shared `ProxyService`. It forwards the incoming HTTP method, request body, query string, and safe headers to the target microservice.

| Gateway route | Target |
| --- | --- |
| `/sessions` and `/sessions/*` | `http://localhost:3001/sessions...` |
| `/templates` and `/templates/*` | `http://localhost:3002/templates...` |
| `/participants` and `/participants/*` | `http://localhost:3003/participants...` |
| `/resources` and `/resources/*` | `http://localhost:3004/...` |

The resources proxy strips the `/resources` prefix because the Resources Microservice exposes CRUD at `/`, `/:id`.

## Dashboard

`GET /dashboard/stats` is a gateway endpoint. It calls these URLs in parallel:

| Count | URL |
| --- | --- |
| sessions | `http://localhost:3001/sessions` |
| templates | `http://localhost:3002/templates` |
| participants | `http://localhost:3003/participants` |
| resources | `http://localhost:3004/` |

It returns:

```json
{
  "sessions": 0,
  "templates": 0,
  "participants": 0,
  "resources": 0
}
```

## Resources Microservice

Runs on port `3004`.

Resource fields:

| Field | Type |
| --- | --- |
| `title` | string |
| `type` | enum: `video`, `document`, `link`, `image`, `other` |
| `url` | string URL |
| `description` | string |

CRUD routes:

| Method | Route |
| --- | --- |
| POST | `/` |
| GET | `/` |
| GET | `/:id` |
| PATCH | `/:id` |
| DELETE | `/:id` |

The service uses global `ValidationPipe` with `transform: true` and `whitelist: true`.

## Error Handling

The gateway has a global exception filter. Error responses always use:

```json
{
  "success": false,
  "message": "..."
}
```

Mapped upstream failures:

| Failure | HTTP status |
| --- | ---: |
| Microservice connection refused | 503 |
| Microservice timeout | 504 |
| Microservice 404 | 404 |
| Other upstream failure | 502 |
| Nest validation/auth errors | original Nest status |

Outbound gateway requests use a 5 second timeout.

## Postman

Import these files:

- `postman/SOC_Phase2_Anas_Environment.postman_environment.json`
- `postman/SOC_Phase2_Anas.postman_collection.json`

Run order:

1. Auth: register, then login.
2. Resources CRUD - Direct 3004.
3. Resources CRUD - Gateway 3000.
4. Gateway Proxy Checklist - 28 Routes.
