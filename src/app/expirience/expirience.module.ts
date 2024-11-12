import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { JobComponent } from './experience/job/job.component';
import { ProjectsComponent } from './experience/projects/projects.component';
import { TimelineComponent } from './experience/timeline/timeline.component';



@NgModule({
  declarations: [
    ExperienceComponent,
    JobComponent,
    ProjectsComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExpirienceModule { }
