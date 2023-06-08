import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookEventComponent } from './book-event/book-event.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent, HomepageComponent, BookEventComponent, LayoutComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ],
  exports: [RouterModule]
})
export class UserModule { }
