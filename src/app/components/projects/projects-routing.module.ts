import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { InfoOfProjectComponent } from './components/info-of-project/info-of-project.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      // {
      //   path: 'list',
      //   component: ListProjectComponent
      // },
      // {
      //   path: 'info/:id',
      //   component: InfoOfProjectComponent
      // }
    ]
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
