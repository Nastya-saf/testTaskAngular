import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DataComponent } from './components/data.component';
import { DataRoutingModule } from './data-routing.module';
import { TestTaskService } from 'src/app/services/test-task.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataRoutingModule,
    ReactiveFormsModule
  ],
  providers:[TestTaskService],
  declarations: [DataComponent]
})
export class DataModule { }
