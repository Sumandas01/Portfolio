import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
    <section class="contact-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">Get In Touch</h2>
        
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-body">
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
                  <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" 
                           class="form-control" 
                           id="name" 
                           formControlName="name"
                           [ngClass]="{'is-invalid': submitted && f['name'].errors}">
                    <div *ngIf="submitted && f['name'].errors" class="invalid-feedback">
                      <div *ngIf="f['name'].errors['required']">Name is required</div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" 
                           class="form-control" 
                           id="email" 
                           formControlName="email"
                           [ngClass]="{'is-invalid': submitted && f['email'].errors}">
                    <div *ngIf="submitted && f['email'].errors" class="invalid-feedback">
                      <div *ngIf="f['email'].errors['required']">Email is required</div>
                      <div *ngIf="f['email'].errors['email']">Enter a valid email address</div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="subject" class="form-label">Subject</label>
                    <input type="text" 
                           class="form-control" 
                           id="subject" 
                           formControlName="subject"
                           [ngClass]="{'is-invalid': submitted && f['subject'].errors}">
                    <div *ngIf="submitted && f['subject'].errors" class="invalid-feedback">
                      <div *ngIf="f['subject'].errors['required']">Subject is required</div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" 
                              id="message" 
                              rows="5" 
                              formControlName="message"
                              [ngClass]="{'is-invalid': submitted && f['message'].errors}">
                    </textarea>
                    <div *ngIf="submitted && f['message'].errors" class="invalid-feedback">
                      <div *ngIf="f['message'].errors['required']">Message is required</div>
                    </div>
                  </div>

                  <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background-color: #f8f9fa;
    }
    .card {
      border: none;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .form-label {
      font-weight: 500;
      color: #2a5298;
    }
    .form-control {
      border: 1px solid #ced4da;
      padding: 0.75rem;
    }
    .form-control:focus {
      border-color: #2a5298;
      box-shadow: 0 0 0 0.2rem rgba(42, 82, 152, 0.25);
    }
    .btn-primary {
      background-color: #2a5298;
      border-color: #2a5298;
      padding: 0.75rem 2rem;
    }
    .btn-primary:hover {
      background-color: #1e3c72;
      border-color: #1e3c72;
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    // Here you would typically send the form data to your backend
    console.log(this.contactForm.value);
    
    // Reset form
    this.contactForm.reset();
    this.submitted = false;
  }
} 