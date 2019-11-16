import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-institute',
  templateUrl: './sign-up-institute.component.html',
  styleUrls: ['./sign-up-institute.component.scss']
})
export class SignUpInstituteComponent implements OnInit {
  
  @ViewChild('f', { static: false }) formbs: NgForm;
  step: number = 1;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onNext() {
    // console.log(this.formbs);
    this.step++;

  }

  onBack() {
    // console.log(this.formbs);
    this.step--;
  }

  onSubmit() {
    console.log(this.formbs);
    this.step++;
  }
}
