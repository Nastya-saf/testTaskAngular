import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {

  public selectedId: string = '';

  constructor(private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.selectedId = this._activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
