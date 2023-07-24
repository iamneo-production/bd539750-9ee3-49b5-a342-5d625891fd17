import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddRefereeComponent } from './admin/add-referee/add-referee.component';
import { OrganiserListComponent } from './admin/organiser-list/organiser-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'add-referee',
    component: AddRefereeComponent
  },
  {
    path: 'organiser-list',
    component: OrganiserListComponent
  },
  {
    path: "**",
    redirectTo: "user/login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
