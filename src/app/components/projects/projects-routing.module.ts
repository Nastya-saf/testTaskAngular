import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: 'info/:id',
    component: ProjectsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule { }
