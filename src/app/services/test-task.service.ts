import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Project } from '../interfaces/project.interface';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestTaskService {

  private localStorageService = new LocalStorageService();

  public getListProject(): Observable<Project[] | null> {
    const listProject = this.localStorageService.getValue();
    return of(listProject);
  }

  public getProjectById(idProject:string): Observable<Project | undefined> {
    const listProject = this.localStorageService.getValue();
    if(listProject){
      return of(listProject.find(project=>project.id===idProject));
    }
    return of(undefined);
  }

  public setListProject(listProject: Project[]): void {
    this.localStorageService.setValue( listProject);
  }

  public setProject(project: Project|undefined): void {
    if(!project){
      return;
    }
    const value = this.localStorageService.getValue();
    if (value === null) {
      return;
    }
    const projectIndex = value.findIndex(currentProject => currentProject.id === project.id);
    
    value[projectIndex] = project;
    this.localStorageService.setValue(value);
  }
}