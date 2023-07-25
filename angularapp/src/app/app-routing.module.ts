import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminVenueListComponent } from './Admin/admin-venue-list/admin-venue-list.component';
import { AddVenueComponent } from './Admin/add-venue/add-venue.component';
import { EditVenueComponent } from './Admin/edit-venue/edit-venue.component';
import { BookEventComponent } from './User/book-event/book-event.component';
import { VenueListComponent } from './User/venue-list/venue-list.component';
import { UserHomepageComponent } from './User/user-homepage/user-homepage.component';


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
    path: 'edit-venue/:id',
    component: EditVenueComponent,
    
  },
  {
    path: 'user-homepage',
    component: UserHomepageComponent,
    
  },

  {
     path: 'venue-list',
     component: VenueListComponent,
    
   },
   {
    path: 'book-event',
    component: BookEventComponent,
   }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
