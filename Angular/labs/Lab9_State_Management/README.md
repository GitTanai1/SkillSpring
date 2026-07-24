# Lab 9: State Management — NgRx Store, Actions, Reducers, Effects & Selectors

## Topics Covered
- NgRx Store Setup
- Actions & Reducer state slices
- NgRx Effects for Async HTTP Actions
- Store Selectors (Cross-Slice Memoized Selectors)

---

## Lab Exercise Goals
1. Install NgRx state packages.
2. Define course actions, reducers, selectors, and effects.
3. Manage enrollment selections inside the store instead of component services.

---

## Step-by-Step Implementation

1. **Setup NgRx Store:**
   Register store configuration providers: `provideStore`, `provideEffects`, and `provideStoreDevtools` inside `app.config.ts`.

2. **Configure Course State:**
   - **Actions:** Define `loadCourses`, `loadCoursesSuccess`, and `loadCoursesFailure`.
   - **Reducer:** Set up initial state and handle mutations.
   - **Effects:** Capture `loadCourses` and resolve using `CourseService.getCourses()`.
   - **Selectors:** Provide `selectAllCourses` for pages.

3. **Configure Enrollment State:**
   Define actions and reducers to manage `enrolledCourseIds: number[]`.
   Implement a cross-slice selector `selectEnrolledCourses` to return full course details for matching IDs.
