import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVenueComponent } from './Admin/add-venue/add-venue.component';
import { AdminVenueListComponent } from './Admin/admin-venue-list/admin-venue-list.component';
import { BookEventComponent } from './User/book-event/book-event.component';
import { UpdateBookEventComponent } from './User/update-book-event/update-book-event.component';

const routes: Routes = [
 
  {
    path: 'admin-venue-list',
    component: AdminVenueListComponent,
  },
  {
    path: 'add-venue',
    component: AddVenueComponent,
  },

  {
    path: 'book-event/:id',
    component: BookEventComponent,
  },
 
  {
    path: 'update-book-event/:id',
    component: UpdateBookEventComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}