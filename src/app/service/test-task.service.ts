import { Injectable } from '@angular/core';
import { LocalStorage } from './local-storage';
import { Project } from '../interface/project.interface';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestTaskService {

  private localStorage = new LocalStorage();

  public getListProject(): Observable<Project[] | null> {
    const listProject = this.localStorage.getValue();
    return of(listProject);
  }

  public getProjectById(idProject:string): Observable<Project | undefined> {
    const listProject = this.localStorage.getValue();
    if(listProject){
      return of(listProject.find(project=>project.id===idProject));
    }
    return of(undefined);
  }

  public setListProject(listProject: Project[]): void {
    this.localStorage.setValue( listProject);
  }

  public setProject(project: Project|undefined): void {
    if(!project){
      return;
    }
    const value = this.localStorage.getValue();
    if (value === null) {
      return;
    }
    const projectIndex = value.findIndex(currentProject => currentProject.id === project.id);
    
    value[projectIndex] = project;
    this.localStorage.setValue(value);
  }
}