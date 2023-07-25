import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddVenueComponent } from './Admin/add-venue/add-venue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditVenueComponent } from './Admin/edit-venue/edit-venue.component';
import { AdminVenueListComponent } from './Admin/admin-venue-list/admin-venue-list.component';
@NgModule({
  declarations: [
    AppComponent,
    AddVenueComponent,
    EditVenueComponent,
    AdminVenueListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }