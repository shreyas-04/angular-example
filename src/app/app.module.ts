import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { SignUpInstituteComponent } from './signup/sign-up-institute/sign-up-institute.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignupComponent,
    SignUpInstituteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
