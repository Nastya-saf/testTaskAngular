import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { ProjectsModule } from './components/projects/projects.module';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'data',
    pathMatch: 'full',
  },
  {
    path: 'data',
    // component: DataComponent
    loadChildren: () => import('./components/data/data.module').then(m => m.DataModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./components/projects/projects.module').then(m => m.ProjectsModule)
    // component: ProjectsModule
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
