import { Component, inject, OnInit, Input, OnDestroy, OnChanges, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { TestTaskService } from 'src/app/service/test-task.service';
import { Project } from 'src/app/interface/project.interface';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-info-of-project',
  templateUrl: './info-of-project.component.html',
  styleUrls: ['./info-of-project.component.scss'],
})
export class InfoOfProjectComponent implements OnInit {
  @Input() id!: string;
  // private activatedRoute = inject(ActivatedRoute);
  // constructor(
  //   private _activatedRoute: ActivatedRoute, public navParams: NavParams) {
  //   console.log('InfoOfProject constructor');
  //   console.log('InfoOfProject constructor index: ', this.navParams.get('id'));
  // }
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
    // console.log('InfoOfProject ngOnInit id:', this.id);
    //     // this.id = this._activatedRoute.snapshot.paramMap.get('id') as string;
    //     console.log('InfoOfProject ngOnInit id: ', this._activatedRoute.snapshot.paramMap.get('id'));
    //   console.log('InfoOfProject ngOnInit index: ', this.navParams.get('id'));
    this._testTaskService.getProjectById(this.id).subscribe((value: Project | undefined)=>{
      this.project=value;
      console.log('InfoOfProject listProject: ',this.project);
      this.setFormValue();
    });
    //   console.log('InfoOfProject ngOnInit index: ', this.navParams.get('id'));
    //   // this.index = this.navParams.get('index');
    //   setTimeout(() => {
    //     this.id = this._activatedRoute.snapshot.paramMap.get('id') as string;
    //     console.log('InfoOfProject ngOnInit id: ', this.id);
    //   }, 1000);
    //   // this.id = this._activatedRoute.snapshot.paramMap.get('id') as string;
    //   // console.log('InfoOfProject ngOnInit id: ', this.id);

  }

  // ngOnChanges(){
  //   console.log('!!! ngOnChanges id: ',this.id);
  // }
  
  // ngOnDestroy(){
  //   this.form.reset();
  //   this.project=undefined;
  //   this.form.setValue({
  //     "createdBy": '',
  //     "description": '',
  //     "startDate": '',
  //     "endDate": '',
  //   });
  //   this.form.setControl('startDate',new FormControl());
  //   this.form.removeControl('startDate');
  //   console.log('!!! ngOnDestroy id: ',this.id);
  // }

  public showCalendar=false;
  openCalendar() {
    this.showCalendar = true;
  }
  cancelCalendar() {
    this.showCalendar = false;
  }

// ngDoCheck(){
//   console.log('!!! ngDoCheck id: ',this.id);
// }

//   ionViewDidEnter(){
//     console.log('ionViewDidEnter');
    
//   }
//   ionViewWillLeave (){
//     console.log('ionViewWillLeave ');
    
  // }

  private setFormValue():void{
    if(!this.project){
      return;
    }
    console.log('setFormValue');
    // this.form.reset();
    // this.form.removeControl('startDate');
    // this.form.setControl('startDate',new FormControl());
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
    // this.project.createdBy=this.form.controls['createdBy'];
  }
}