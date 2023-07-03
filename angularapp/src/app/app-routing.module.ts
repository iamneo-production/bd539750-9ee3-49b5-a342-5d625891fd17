import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookEventComponent } from './components/user/book-event/book-event.component';
import { HomepageComponent } from './components/user/homepage/homepage.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ViewBookedEventComponent } from './components/user/view-booked-event/view-booked-event.component';

const routes: Routes = [
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'user/register',
    component: RegisterComponent
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
    path: "**",
    redirectTo: "user/login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
