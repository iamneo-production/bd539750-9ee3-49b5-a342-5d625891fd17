import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { UserHeaderComponent } from './User/user-header/user-header.component';
import { AdminVenueListComponent } from './Admin/admin-venue-list/admin-venue-list.component';
import { AddVenueComponent } from './Admin/add-venue/add-venue.component';
import { BookEventComponent } from './User/book-event/book-event.component';
import { UpdateBookEventComponent } from './User/update-book-event/update-book-event.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
    AdminVenueListComponent,
    AddVenueComponent,
    BookEventComponent,
    UpdateBookEventComponent,
    FilterPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }