import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { TestTaskService } from 'src/app/service/test-task.service';
import { Project } from 'src/app/interface/project.interface';
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
    private _activatedRoute: ActivatedRoute, public navParams: NavParams) {
    this.form = _formBuilder.group({
      "createdBy": ['', [Validators.required]],
      "description": ['', [Validators.required]],      
      "startDate": ['', [Validators.required]],
      "endDate": ['', [Validators.required]],
    });
   }

  ngOnInit() {
    this._testTaskService.getProjectById(this.id).subscribe((value: Project | undefined)=>{
      this.project=value;
      console.log('InfoOfProject listProject: ',this.project);
      this.setFormValue();
    });
  }

  private setFormValue():void{
    if(!this.project){
      return;
    }
    console.log('setFormValue');
    console.log('!!! FORM: ',this.form);
    
    this.form.setValue({
      "createdBy": this.project.createdBy,      
      "description": this.project.description,
      "startDate": this.project.startDate,
      "endDate": this.project.endDate,
    });
    console.log('setFormValue: this.form: ',this.form.value);
    
  }

  public submitForm():void{
    console.log('InfoOfProject submitForm this.form.controls: ',this.form.controls);
    if(this.project){
      
    this.project=Object.assign(this.project,this.form.value);
    console.log('InfoOfProject submitForm Object.assign: ',this.project);
    this._testTaskService.setProject(this.project);
    }
    
  }
}