import { NgModule , LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu);
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './components/projects.component';
import { InfoOfProjectComponent } from './components/info-of-project/info-of-project.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { RouteReuseStrategy } from '@angular/router';
import '@angular/common/locales/global/ru';
import { DateComponent } from './components/date-control/date-control.component';
registerLocaleData(localeRu);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProjectsComponent,
    InfoOfProjectComponent,
    ListProjectComponent,
    DateComponent
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'ru' },
     NavParams],
})
export class ProjectsModule { }
