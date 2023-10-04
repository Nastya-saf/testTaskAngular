import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TestTaskService } from 'src/app/services/test-task.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent {

  form: FormGroup;
  constructor(private _formBuilder: FormBuilder,private _navCtrl: NavController,private _testTaskService:TestTaskService) {
    
    this.form = _formBuilder.group({
      dataJSON: ['', [Validators.required]],
    });
  }

  public submitForm(): void {
    const value = JSON.parse(this.form.controls['dataJSON'].value).Projects;
    
    this._testTaskService.setListProject(value);
    this._navCtrl.navigateRoot([`/projects`]);
  }

}
