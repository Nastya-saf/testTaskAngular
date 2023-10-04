import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public listPages = [
    { title: 'Данные', url: 'data', icon: 'document' },
    { title: 'Проекты', url: 'projects', icon: 'folder-open' },
  ];
  constructor() { }
}
