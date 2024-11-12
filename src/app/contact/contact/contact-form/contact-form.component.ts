// src/app/contact-form/contact-form.component.ts
import { Component } from '@angular/core';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  alert = {
    type: '', // Tipo de alerta (success, danger, etc.)
    msg: ''   // Mensaje de la alerta
  };

  constructor(private contactService: ContactService) {}

  // Validar correo electrónico con una expresión regular
  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  onSubmit() {
    // Validar si el correo electrónico tiene el formato adecuado
    if (!this.validateEmail(this.contact.email)) {
      this.alert = { type: 'danger', msg: 'Please enter a valid email address.' };
      return;
    }

    // Llamamos al servicio para enviar los datos al backend
    this.contactService.submitContactForm(this.contact).subscribe(
      response => {
        console.log('Form sent successfully', response);
        this.alert = { type: 'success', msg: 'Your contact form has been successfully submitted!' };
      },
      error => {
        console.error('Error submitting form', error);
        this.alert = { type: 'danger', msg: 'There was an error submitting the form. Please try again later.' };
      }
    );

    // Reiniciar el formulario después de enviarlo
    this.contact = { name: '', email: '', message: '' };
  }
}
