import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';

import { SocialLinkComponent } from './contact/social-link/social-link.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';



@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent,
    SocialLinkComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    ContactComponent
  ]
})
export class ContactModule { }
