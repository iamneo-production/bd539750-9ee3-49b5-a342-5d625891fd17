import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LayoutComponent } from './layout/layout.component';
import { ViewbookeventComponent } from './viewbookevent/viewbookevent.component';
import { BookeventComponent } from './bookevent/bookevent.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent, 
    HomepageComponent, 
    BookeventComponent, 
    LayoutComponent, 
    ViewbookeventComponent,],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ],
  exports: [RouterModule]
})
export class UserModule {  }
