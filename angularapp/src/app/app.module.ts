import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVenueComponent } from './Admin/add-venue/add-venue.component';
import { EditVenueComponent } from './Admin/edit-venue/edit-venue.component';
import { AdminVenueListComponent } from './Admin/admin-venue-list/admin-venue-list.component';
import { VenueListComponent } from './User/venue-list/venue-list.component';
import { BookEventComponent } from './User/book-event/book-event.component';
import { HttpClientModule } from '@angular/common/http';
import { UserHomepageComponent } from './User/user-homepage/user-homepage.component';
import { UserHeaderComponent } from './User/user-header/user-header.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';

const routes:Routes =[
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
  
]

@NgModule({
  declarations: [
    AppComponent,
    AddVenueComponent,
    EditVenueComponent,
    AdminVenueListComponent,
    VenueListComponent,
    BookEventComponent,
    UserHomepageComponent,
    UserHeaderComponent,
    AdminHeaderComponent
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
