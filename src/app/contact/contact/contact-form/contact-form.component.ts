import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  alert = {
    type: '', // Tipo de alerta (success, danger, etc.)
    msg: '', // Mensaje de la alerta
  };

  // Validar correo electrónico
  validateEmail(email: string): boolean {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  onSubmit() {
    // Validar correo electrónico
    if (!this.validateEmail(this.contact.email)) {
      this.alert = {
        type: 'danger',
        msg: 'Please enter a valid email address.',
      };
      return;
    }

    // Crear enlace mailto
    const mailtoLink = `mailto:acontacts13@gmail.com?subject=Message from ${encodeURIComponent(
      this.contact.name
    )}&body=${encodeURIComponent(this.contact.message)} (From: ${
      this.contact.email
    })`;

    // Abrir el cliente de correo predeterminado del usuario
    window.location.href = mailtoLink;

    // Mostrar mensaje de éxito
    this.alert = {
      type: 'success',
      msg: 'Your email client has been opened to send the message.',
    };

    // Reiniciar el formulario
    this.contact = { name: '', email: '', message: '' };
  }
}