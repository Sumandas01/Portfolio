import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService, ContactResponse } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitError = '';
      this.submitSuccess = false;

      this.contactService.submitContact(this.contactForm.value)
        .subscribe({
          next: (response: ContactResponse) => {
            this.isSubmitting = false;
            this.submitSuccess = true;
            this.contactForm.reset();
          },
          error: (error: any) => {
            this.isSubmitting = false;
            this.submitError = error.error?.message || 'An error occurred while submitting the form.';
          }
        });
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (control?.errors) {
      if (control.errors['required']) return 'This field is required';
      if (control.errors['email']) return 'Please enter a valid email address';
      if (control.errors['minlength']) {
        const requiredLength = control.errors['minlength'].requiredLength;
        return `Minimum length is ${requiredLength} characters`;
      }
    }
    return '';
  }
} 