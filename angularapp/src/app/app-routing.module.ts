import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRefereeComponent } from './Admin/add-referee/add-referee.component';
import { AddTeamComponent } from './Admin/add-team/add-team.component';
import { AddVenueComponent } from './Admin/add-venue/add-venue.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { AdminHomepageComponent } from './Admin/admin-homepage/admin-homepage.component';
import { AdminVenueListComponent } from './Admin/admin-venue-list/admin-venue-list.component';
import { EditTeamComponent } from './Admin/edit-team/edit-team.component';
import { EditVenueComponent } from './Admin/edit-venue/edit-venue.component';
import { TeamsComponent } from './Admin/teams/teams.component';
import { AuthGuard } from './Guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserHomepageComponent } from './User/user-homepage/user-homepage.component';
import { VenueListComponent } from './User/venue-list/venue-list.component';

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
    path: 'admin-homepage',
    component: AdminHomepageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-venue-list',
    component: AdminVenueListComponent,
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
    path: 'edit-team/:id',
    component: EditTeamComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-referee',
    component: AddRefereeComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
