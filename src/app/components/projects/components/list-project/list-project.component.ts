import { Component, OnInit } from '@angular/core';
import { TestTaskService } from 'src/app/service/test-task.service';
import { Project } from 'src/app/interface/project.interface';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss'],
})
export class ListProjectComponent implements OnInit{

  public listProject:Project[] | null=null;

  constructor(private _testTaskService:TestTaskService) { }
  ngOnInit(){
    console.log('ListProjectComponent ngOnInit');
    this._testTaskService.getListProject().subscribe((value: Project[] | null)=>{
      this.listProject=value;
      console.log('ListProjectComponent listProject: ',this.listProject);
    });
  }
}
