import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

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

  // Inicializar EmailJS con la clave pública
  constructor() {
    emailjs.init('UcVqzhlLqi7ymhBMC'); // Reemplaza con tu "public_key"
  }

  // Validar correo electrónico
  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  // Manejar el submit del formulario
  onSubmit() {
    // Validar correo electrónico
    if (!this.validateEmail(this.contact.email)) {
      this.alert = { type: 'danger', msg: 'Please enter a valid email address.' };
      return;
    }

    // Parametros del correo a enviar
    const emailParams = {
      from_name: this.contact.name,
      from_email: this.contact.email,
      message: this.contact.message,
    };

    // Enviar el formulario a EmailJS
    emailjs.send('service_pd4a2uc', 'template_nltku1f', emailParams)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.alert = { type: 'success', msg: 'Your message has been sent successfully!' };
        },
        (error) => {
          console.error('FAILED...', error);
          this.alert = { type: 'danger', msg: 'There was an error sending your message. Please try again later.' };
        }
      );

    // Reiniciar el formulario después de enviarlo
    this.contact = { name: '', email: '', message: '' };
  }
}