import { Component, OnInit } from '@angular/core';
import { TestTaskService } from 'src/app/services/test-task.service';
import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss'],
})
export class ListProjectComponent implements OnInit{

  public listProject:Project[] | null=null;

  constructor(private _testTaskService:TestTaskService) { }
  
  ngOnInit(){
    this._testTaskService.getListProject().subscribe((value: Project[] | null)=>{
      this.listProject=value;
    });
  }
}
