# Lab 5: Reactive Forms — FormBuilder, FormGroup, FormArray & Custom Validators

## Topics Covered
- ReactiveFormsModule Setup
- `FormBuilder` & `FormGroup` Config
- Custom Synchronous Validators
- Async Validators
- `FormArray` for Dynamic Forms
- `getRawValue()` vs `value`

---

## Lab Exercise Goals
1. Rebuild the enrollment form using the reactive model-driven approach.
2. Implement synchronous validations for course codes and async email availability checks.
3. Manage repeating course lists using `FormArray`.

---

## Step-by-Step Implementation

1. **Initialize Form Control tree:**
   Inject `FormBuilder` and declare form fields using `this.fb.group({ ... })` inside `ngOnInit`.

2. **Custom Validators:**
   - **Synchronous:** Define `noCourseCode` validator to block values starting with 'XX'.
   - **Async:** Define `simulateEmailCheck` returning a promise that blocks emails containing 'test@' after 800ms.

3. **Dynamic FormArrays:**
   - Setup `additionalCourses` FormArray.
   - Inject helper typed getters `get additionalCourses()` to query controls.
   - Implement `addCourse()` and `removeCourse(index)` actions.

4. **Form Value Checks:**
   Demonstrate `getRawValue()` (includes disabled fields) vs `value` (excludes disabled fields) outputs on console.
