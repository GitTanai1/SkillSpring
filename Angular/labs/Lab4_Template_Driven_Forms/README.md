# Lab 4: Template-Driven Forms & Validation

## Topics Covered
- Template-Driven Form Basics
- Built-in Validators (`required`, `minlength`, `email`)
- `ngForm` and `ngModel` Template Variables
- Validation CSS Classes (`.ng-invalid`, `.ng-touched`)
- Form Submission & Reset

---

## Lab Exercise Goals
1. Build an enrollment request form using Angular template-driven controls.
2. Implement validation constraints and display contextual error messages.
3. Reset form models and validation states cleanly.

---

## Step-by-Step Implementation

1. **Setup Template-Driven Form:**
   Import `FormsModule` and construct `<form #enrollForm="ngForm" (ngSubmit)="onSubmit(enrollForm)">`.

2. **Define Form Inputs:**
   Add `studentName`, `studentEmail`, `courseId`, `preferredSemester` dropdown, and `agreeToTerms` checkbox with appropriate `[(ngModel)]` attributes.

3. **Implement Validations:**
   - Bind `#nameCtrl="ngModel"` to inputs.
   - Show validation error spans conditionally based on touched state and errors.
   - Enable styling of invalid fields using `.ng-invalid.ng-touched` selector.

4. **Form Actions:**
   - Disable submission when invalid: `[disabled]="enrollForm.invalid"`.
   - Clear values and errors: `enrollForm.resetForm()`.
