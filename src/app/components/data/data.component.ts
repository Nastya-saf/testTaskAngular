import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TestTaskService } from 'src/app/service/test-task.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent {
  // JSONData
  //form
  form: FormGroup;
  constructor(private _formBuilder: FormBuilder,private _navCtrl: NavController,private _testTaskService:TestTaskService) {
    
    this.form = _formBuilder.group({
      "dataJSON": ['', [Validators.required]],
    });
  }

  public submitForm(): void {
    console.log('submitForm this.form.controls: ',this.form.controls['dataJSON'].value);
    const value = JSON.parse(this.form.controls['dataJSON'].value).Projects;
    console.log('value: ',value);
    
    this._testTaskService.setListProject(value);
    this._navCtrl.navigateRoot([`/projects`]);
  }

}
