import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { UserHomepageComponent } from './User/user-homepage/user-homepage.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { UserHeaderComponent } from './User/user-header/user-header.component';
import { AdminVenueListComponent } from './Admin/admin-venue-list/admin-venue-list.component';
import { AddVenueComponent } from './Admin/add-venue/add-venue.component';
import { EditVenueComponent } from './Admin/edit-venue/edit-venue.component';
import { VenueListComponent } from './User/venue-list/venue-list.component';
import { AddTeamComponent } from './Admin/add-team/add-team.component';
import { TeamsComponent } from './Admin/teams/teams.component';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { AddRefereeComponent } from './Admin/add-referee/add-referee.component';
import { BookEventComponent } from './User/book-event/book-event.component';
import { OrganiserListComponent } from './Admin/organiser-list/organiser-list.component';
import { UpdateBookEventComponent } from './User/update-book-event/update-book-event.component';
import { ViewbookEventComponent } from './User/viewbook-event/viewbook-event.component';
import { SchedulesComponent } from './Admin/schedules/schedules.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserHomepageComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
    AdminVenueListComponent,
    AddVenueComponent,
    EditVenueComponent,
    VenueListComponent,
    AddTeamComponent,
    TeamsComponent,
    AddRefereeComponent,
    BookEventComponent,
    OrganiserListComponent,
    UpdateBookEventComponent,
    ViewbookEventComponent,
    SchedulesComponent,
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
    ToastrModule.forRoot(),
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
