# Lab 10: Unit Testing Angular Applications — Jasmine, Karma & TestBed

## Topics Covered
- Jasmine Test Syntax (`describe`, `it`, `expect`, `spyOn`)
- TestBed Configuration
- Component Testing (Inputs, Outputs, Rendering, change detection)
- Service Testing (`HttpClientTestingModule` / `HttpTestingController`)
- NgRx Testing using `provideMockStore`

---

## Lab Exercise Goals
1. Setup TestBed unit tests for Angular components.
2. Verify input bindings render correctly in the DOM.
3. Mock HTTP server requests inside service test suites.

---

## Step-by-Step Implementation

1. **Testing Component (CourseCard):**
   - Open `course-card.spec.ts`.
   - Mock store providers using `provideMockStore`.
   - Assert creation, input render assertions, and Output emitter tests.
   - Spy on `console.log` during `ngOnChanges` changes.

2. **Testing Service (CourseService):**
   - Configure `provideHttpClientTesting()` and `HttpTestingController` inside `course.spec.ts`.
   - Verify request paths, mock response flushes, and error fallbacks.
