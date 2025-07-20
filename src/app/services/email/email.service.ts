import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environment/environment.template';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
    emailjs.init(environment.emailjs.publicKey);
  }

  sendEmail(data: EmailData): Observable<EmailResponse> {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: 'rohan.mishra488@gmail.com'
    };

    return from(emailjs.send(environment.emailjs.serviceId, environment.emailjs.templateId, templateParams)).pipe(
      map(() => ({
        success: true,
        message: 'Email sent successfully!'
      })),
      catchError(() => throwError(() => ({
        success: false,
        message: 'Failed to send email'
      })))
    );
  }
}