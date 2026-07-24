# Lab 8: HTTP Client — API Integration, Observables & Interceptors

## Topics Covered
- Setting Up `HttpClient`
- REST API Calls (GET, POST, PUT, DELETE)
- RxJS Operators (`map`, `catchError`, `tap`, `retry`, `switchMap`)
- Functional Interceptors (Headers, Logging, Spinner Loader)

---

## Lab Exercise Goals
1. Refactor services to query database records from a Mock REST API.
2. Handle network errors and request retries.
3. Intercept HTTP requests to add auth tokens and toggle loading states.

---

## Step-by-Step Implementation

1. **Configure mock API server:**
   Generate `db.json` and boot up `json-server --watch db.json --port 3000`.

2. **HttpClient Integration:**
   Import `provideHttpClient()` in `app.config.ts` and replace local arrays with `http.get`, `http.post`, and `http.delete` streams.

3. **RxJS Pipelines:**
   - Chain `retry(2)` to retry requests.
   - Use `catchError` to capture failure status codes.
   - Use `switchMap` to cancel pending API calls when new inputs arrive.

4. **HTTP Interceptors:**
   - **Auth:** Inject `Bearer mock-token-12345` headers.
   - **Error:** Redirect unauthenticated users on 401.
   - **Loading:** Toggle `LoadingService` subjects inside `finalize` blocks.
