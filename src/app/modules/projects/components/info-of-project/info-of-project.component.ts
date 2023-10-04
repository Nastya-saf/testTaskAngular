import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { TestTaskService } from 'src/app/services/test-task.service';
import { Project } from 'src/app/interfaces/project.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-info-of-project',
  templateUrl: './info-of-project.component.html',
  styleUrls: ['./info-of-project.component.scss'],
})
export class InfoOfProjectComponent implements OnInit {
  @Input() id!: string;
  
  public form: FormGroup;
  public project: Project | undefined = undefined;
public model=false;
  constructor(private _formBuilder: FormBuilder,private _testTaskService:TestTaskService,
     public navParams: NavParams) {
    this.form = _formBuilder.group({
      createdBy: ['', [Validators.required]],
      description: ['', [Validators.required]],      
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
   }

  ngOnInit() {
    this._testTaskService.getProjectById(this.id).subscribe((value: Project | undefined)=>{
      this.project=value;
      this.setFormValue();
    });
  }

  private setFormValue():void{
    if(!this.project){
      return;
    }
    
    this.form.setValue({
      createdBy: this.project.createdBy,      
      description: this.project.description,
      startDate: this.project.startDate,
      endDate: this.project.endDate,
    });
  }

  public submitForm():void{
    if(this.project){
      
    this.project=Object.assign(this.project,this.form.value);
    this._testTaskService.setProject(this.project);
    }
    
  }
}