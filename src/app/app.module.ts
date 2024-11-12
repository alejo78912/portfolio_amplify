import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexModule } from './index/index.module';
import { AboutMeModule } from './about-me/about-me.module';
import { ExpirienceModule } from './expirience/expirience.module';
import { KnowledgesModule } from './knowledges/knowledges.module';
import { GeneralComponentsModule } from './general-components/general-components.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    AboutMeModule,
    ExpirienceModule,
    KnowledgesModule,
    GeneralComponentsModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
