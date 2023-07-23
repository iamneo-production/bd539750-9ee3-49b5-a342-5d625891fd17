import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookEventComponent } from './components/user/book-event/book-event.component';
import { HomepageComponent } from './components/user/homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewBookedEventComponent } from './components/user/view-booked-event/view-booked-event.component';
import { AddRefereeComponent } from './admin/add-referee/add-referee.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';

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
    path: 'user/homepage',
    component: HomepageComponent
  },
  {
    path: 'user/bookevent',
    component: BookEventComponent
  },
  {
    path: 'user/viewbookedevent',
    component: ViewBookedEventComponent
  },
  {
    path: 'add-referee',
    component: AddRefereeComponent
  },
  {
    path: "admin/viewuser",
    component: ViewUserComponent 
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
