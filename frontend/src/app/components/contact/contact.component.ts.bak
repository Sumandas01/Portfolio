import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  error = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.apiService.submitContact(this.contactForm.value).subscribe({
        next: (response) => {
          this.success = true;
          this.error = false;
          this.contactForm.reset();
          this.submitted = false;
        },
        error: (err) => {
          this.error = true;
          this.success = false;
          this.errorMessage = err.error?.message || 'An error occurred while sending your message.';
        }
      });
    }
  }
} 