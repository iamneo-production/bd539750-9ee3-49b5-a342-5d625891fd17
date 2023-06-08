import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookEventComponent } from './book-event/book-event.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "", component: LayoutComponent, 
    children: [
      {path: "homepage", component: HomepageComponent},
      {path: "bookEvent", component: BookEventComponent}
    ]
  },
  {path: "**", component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
