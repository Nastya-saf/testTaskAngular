import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
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
      /*
       https://date-fns.org/docs/format
const dateFromIonDatetime = '2021-06-04T14:23:00-04:00';
const formattedString = format(parseISO(dateFromIonDatetime), 'MMM d, yyyy');

console.log(formattedString); // Jun 4, 2021
*/
    });
  }
  // public click(id: string): void {
  //   console.log('click id: ', id);
  //   // this.navCtrl.navigateRoot('/route');
  //   this.navCtrl.navigateForward(['/projects/info', id]);
  // }

}
