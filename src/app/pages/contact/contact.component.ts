import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { TitleComponent } from '../../components/title/title.component';
import { IconTitleComponent } from '../../components/icon-title/icon-title.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FieldComponent } from '../../components/field/field.component';
import { ToastComponent } from '../../components/toast/toast.component';
import { CopyrightComponent } from '../../components/copyright/copyright.component';
import { EmailService } from '../../services/email/email.service';
import { PERSON, SOCIAL_MEDIA } from '../../constants/constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MainLayoutComponent, 
    TitleComponent, 
    IconTitleComponent, 
    ButtonComponent, 
    FieldComponent,
    ToastComponent,
    CopyrightComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  loading = false;
  toastMessage = '';
  toastType: 'success' | 'error' | 'info' = 'info';
  showToast = false;

  phoneNumber = PERSON.find(el => el.title === 'Phone')?.value || '';
  email = PERSON.find(el => el.title === 'Mail')?.value || '';
  linkedinUrl = SOCIAL_MEDIA.find(el => el.title === 'linkedin')?.link || '';

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.loading = true;
      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: (response) => {
          this.loading = false;
          this.toastMessage = 'Email sent successfully!';
          this.toastType = 'success';
          this.showToast = true;
          this.contactForm.reset();
        },
        error: (error) => {
          this.loading = false;
          this.toastMessage = 'Failed to send email. Please try again.';
          this.toastType = 'error';
          this.showToast = true;
        }
      });
    }
  }

  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Invalid email address';
    }
    return '';
  }

  hideToast() {
    this.showToast = false;
  }
  
}