import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
  
  @ViewChild('f', { static: false }) formbs: NgForm;
  onSubmit() {
    console.log(this.formbs);
  }

}
