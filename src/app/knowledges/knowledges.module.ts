import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgesComponent } from './knowledges/knowledges.component';
import { TechComponent } from './knowledges/tech/tech.component';
import { LanguagesComponent } from './knowledges/languages/languages.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    KnowledgesComponent,
    TechComponent,
    LanguagesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    KnowledgesComponent
  ]
})
export class KnowledgesModule { }
