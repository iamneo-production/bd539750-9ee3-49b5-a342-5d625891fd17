import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRefereeComponent } from './admin/add-referee/add-referee.component';
import { OrganiserListComponent } from './admin/organiser-list/organiser-list.component';

const routes: Routes = [
  {path: '', component: AddRefereeComponent},
  {
    path: 'Organiserlist',
    component:OrganiserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
