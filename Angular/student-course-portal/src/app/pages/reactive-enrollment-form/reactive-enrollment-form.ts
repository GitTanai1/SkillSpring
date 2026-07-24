import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {
  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [this.simulateEmailCheck.bind(this)]],
      courseId: ['', [Validators.required, this.noCourseCode.bind(this)]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }


  get additionalCourses(): FormArray {

    return this.enrollForm.get('additionalCourses') as FormArray;
  }


  getAsFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }


  noCourseCode(control: AbstractControl): ValidationErrors | null {
    const val = control.value;
    if (val && val.toString().toUpperCase().startsWith('XX')) {
      return { noCourseCode: true };
    }
    return null;
  }


  simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const email = control.value;
        if (email && email.toLowerCase().includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }
      }, 800);
    });
  }

  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    console.log('Reactive Form Submitted!');


    console.log('Form .value:', this.enrollForm.value);
    console.log('Form .getRawValue():', this.enrollForm.getRawValue());
    console.log('Form Validity:', this.enrollForm.valid);

    if (this.enrollForm.valid) {
      this.submitted = true;
    }
  }

  onReset(): void {
    this.enrollForm.reset({
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    this.additionalCourses.clear();
    this.submitted = false;
  }
}
