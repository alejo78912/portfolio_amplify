import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index/index.component';
import { AboutMeComponent } from './about-me/about-me/about-me.component';
import { ExperienceComponent } from './expirience/experience/experience.component';
import { ContactComponent } from './contact/contact/contact.component';
import { KnowledgesComponent } from './knowledges/knowledges/knowledges.component';



const routes: Routes = [
  { path: '', component: IndexComponent }, // Ruta para la página principal
  { path: 'about', component: AboutMeComponent }, // Ruta para la sección de About Me
  { path: 'experience', component: ExperienceComponent }, // Ruta para la sección de Experience
  { path: 'knowledges', component: KnowledgesComponent }, // Ruta para la sección de Knowledges
  { path: 'contact', component: ContactComponent }, // Ruta para la sección de Contact
  { path: '**', redirectTo: '' } // Redirige a la página de inicio para rutas no válidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Establece las rutas en la aplicación
  exports: [RouterModule] // Exporta el módulo para que esté disponible en otros módulos
})
export class AppRoutingModule { }
