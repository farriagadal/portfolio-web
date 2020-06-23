import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,  
    data: {animation: 1},
  },
  { 
    path: 'about', 
    component: AboutMeComponent, 
    data: {animation: 2},
  },
  { 
    path: 'projects', 
    component: ProjectsComponent, 
    data: {animation: 3},
  },
  { 
    path: 'skills', 
    component: SkillsComponent,
    data: {animation: 4},
  },
  { 
    path: 'contact', 
    component: ContactComponent,
    data: {animation: 5},
  },
  { 
    path: '**', 
    component: HomeComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
