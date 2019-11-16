import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { SignUpInstituteComponent } from './signup/sign-up-institute/sign-up-institute.component';


const appRoutes: Routes = [
  {path: '', component: MainComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'signup-institute', component: SignUpInstituteComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}