import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { BioComponent } from './about-me/bio/bio.component';
import { SkillsComponent } from './about-me/skills/skills.component';
import { InterestsComponent } from './about-me/interests/interests.component';
import { EducationComponent } from './about-me/education/education.component';



@NgModule({
  declarations: [
    AboutMeComponent,
    BioComponent,
    SkillsComponent,
    InterestsComponent,
    EducationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutMeComponent
  ]
})
export class AboutMeModule { }
