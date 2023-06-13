import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookeventComponent } from './bookevent/bookevent.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component';
import { ViewbookeventComponent } from './viewbookevent/viewbookevent.component';

const routes: Routes = [
  {path: "", component: LayoutComponent, 
    children: [
      {path: "login", component: LoginComponent},
      {path: "signup", component: SignupComponent},
      {path: "homepage", component: HomepageComponent},
      {path: "bookEvent", component: BookeventComponent},
      {path: "viewbookEvent", component: ViewbookeventComponent},
      {path: "**", redirectTo: "/user/homepage"},
    ]
  },
  {path: "**", redirectTo: "/user/homepage"},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
