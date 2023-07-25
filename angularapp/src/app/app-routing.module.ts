import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVenueComponent } from './Admin/add-venue/add-venue.component';
import { AdminVenueListComponent } from './Admin/admin-venue-list/admin-venue-list.component';
import { EditVenueComponent } from './Admin/edit-venue/edit-venue.component';

const routes: Routes = [
    {
        path: 'add-venue',
        component: AddVenueComponent,
      },
      {
        path: 'edit-venue/:id',
        component: EditVenueComponent,
      },
      {
        path: 'admin-venue-list',
        component: AdminVenueListComponent,
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }