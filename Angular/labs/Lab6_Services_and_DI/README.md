# Lab 6: Services & Dependency Injection

## Topics Covered
- Creating and Providing Services
- `providedIn: 'root'` vs Component Providers
- Injecting Services into Components
- Singleton Service Pattern
- Hierarchical Dependency Injection

---

## Lab Exercise Goals
1. Create a `CourseService` acting as a single source of truth for course data.
2. Inject services into multiple page layouts.
3. Inject services into other services (service-to-service dependency injection).

---

## Step-by-Step Implementation

1. **Create CourseService:**
   Generate the service using `providedIn: 'root'` and define `getCourses()`, `getCourseById()`, `createCourse()`, etc.

2. **Inject into Components:**
   - Inject `CourseService` inside `CourseList` and `Home` components to read course statistics.
   - Verify both components read from the same shared array (singleton state).

3. **Service-to-Service Injection:**
   Inject `CourseService` into the newly created `EnrollmentService`. The `EnrollmentService` uses `CourseService` to resolve enrolled IDs into full course details.
