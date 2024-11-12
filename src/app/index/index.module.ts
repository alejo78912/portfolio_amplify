import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './index/home/home.component';
import { HeroComponent } from './index/hero/hero.component';
import { HigthlightsComponent } from './index/higthlights/higthlights.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    HeroComponent,
    HigthlightsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    IndexComponent
  ]

})
export class IndexModule { }
