import { Injectable } from '@angular/core';
import { LocalStorage } from './local-storage';
import { HttpClient } from '@angular/common/http'
import { Project } from '../interface/project.interface';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestTaskService {

  private localStorage = new LocalStorage();

  constructor(private http: HttpClient) { }

  // Получение списка проектов
  public getListProject(): Observable<Project[] | null> {
    // `listProject`
    const listProject = this.localStorage.getValue();
    return of(listProject);
  }

  // Получение проекта
  public getProjectById(idProject:string): Observable<Project | undefined> {
    const listProject = this.localStorage.getValue();
    if(listProject){
      return of(listProject.find(project=>project.id===idProject));
    }
    return of(undefined);
  }

  // Запись проектов (сразу всех/первый раз)
  public setListProject(listProject: Project[]): void {
    this.localStorage.setValue( listProject);
  }

  // Запись/редактирование одного проекта 
  public setProject(project: Project|undefined): void {
    if(!project){
      return;
    }
    const value = this.localStorage.getValue();
    if (value === null) {
      return;
    }
    const projectIndex = value.findIndex(currentProject => currentProject.id === project.id);
    // пройтись по массиву найти по id, узнать его индекс и в него (по индексу) записать, сделать запись в storage
    value[projectIndex] = project;
    this.localStorage.setValue(value);
  }
}