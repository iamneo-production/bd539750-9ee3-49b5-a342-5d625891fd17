import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRefereeComponent } from './Admin/add-referee/add-referee.component';
import { AddTeamComponent } from './Admin/add-team/add-team.component';
import { AddVenueComponent } from './Admin/add-venue/add-venue.component';
import { AdminVenueListComponent } from './Admin/admin-venue-list/admin-venue-list.component';
import { EditVenueComponent } from './Admin/edit-venue/edit-venue.component';
import { OrganiserListComponent } from './Admin/organiser-list/organiser-list.component';
import { SchedulesComponent } from './Admin/schedules/schedules.component';
import { TeamsComponent } from './Admin/teams/teams.component';
import { AuthGuard } from './Guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookEventComponent } from './User/book-event/book-event.component';
import { UpdateBookEventComponent } from './User/update-book-event/update-book-event.component';
import { UserHomepageComponent } from './User/user-homepage/user-homepage.component';
import { VenueListComponent } from './User/venue-list/venue-list.component';
import { ViewbookEventComponent } from './User/viewbook-event/viewbook-event.component';

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
    path: 'user-homepage',
    component: UserHomepageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-venue-list',
    component: AdminVenueListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'organiser-list',
    component: OrganiserListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-venue',
    component: AddVenueComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-venue/:id',
    component: EditVenueComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'view-schedules',
    component: SchedulesComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'venue-list',
    component: VenueListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'teams',
    component: TeamsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-team',
    component: AddTeamComponent,
  },
  {
    path: 'add-referee',
    component: AddRefereeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'book-event/:id',
    component: BookEventComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-book-event',
    component: ViewbookEventComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-book-event/:id',
    component: UpdateBookEventComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
