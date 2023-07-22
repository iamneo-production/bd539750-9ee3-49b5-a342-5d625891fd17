import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './Admin/teams/teams.component';
import { AddTeamComponent } from './Admin/add-team/add-team.component';
import { AddRefereeComponent } from './Admin/add-referee/add-referee.component';

const routes: Routes = [
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'add-referee',
    component: AddRefereeComponent,
  },
  {
    path: 'add-team',
    component: AddTeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
