import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Nav, Platform } from '@angular/ionic';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  // @ViewChild(Nav) navCtrl: Nav;
  public selectedId: string = '';

  constructor(private _activatedRoute: ActivatedRoute) {
    console.log('ProjectsComponent constructor');
  }

  ngOnInit() {
    // console.log('ProjectsComponent ngOnInit id!!!: ', this._activatedRoute.snapshot.params['id']);

    this.selectedId = this._activatedRoute.snapshot.paramMap.get('id') as string;
    console.log('ProjectsComponent ngOnInit this.selectedId: ', this.selectedId);
  }
}
