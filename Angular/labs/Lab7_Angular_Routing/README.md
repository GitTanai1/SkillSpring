# Lab 7: Angular Routing — Guards, Lazy Loading & Route Data

## Topics Covered
- Configuring Routes
- Route parameters & Query parameters
- Nested child routes
- Lazy Loading Components
- `CanActivate` and `CanDeactivate` Guards

---

## Lab Exercise Goals
1. Configure a routes tree mapping components to paths.
2. Setup parameters for details pages and search syncs.
3. Secure profile pages and prevent data loss on dirty forms.

---

## Step-by-Step Implementation

1. **Configure Routing Tree (`app.routes.ts`):**
   Map root paths (`''`, `'courses'`, `'profile'`) to their respective components.

2. **Lazy-Load Components:**
   Instead of importing components statically, use `loadComponent: () => import(...)` to optimize chunk files during build.

3. **URL Parameter Mappings:**
   - Use `:id` segment for course details page: `courses/:id`.
   - Update query parameters dynamically during search updates.

4. **Routing Guards:**
   - Secure profile pages using `authGuard` (CanActivate) checking session login.
   - Prompt warnings when leaving dirty enrollment forms using `unsavedChangesGuard` (CanDeactivate).
