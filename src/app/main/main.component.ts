import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  
  @ViewChild('f', { static: false }) formbs: NgForm;
  
  loginType:string = 'user';

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.formbs);
  }

  btnClick(text: string){
    this.loginType = text;
  }

  ngOnInit() {
    
  }
}

