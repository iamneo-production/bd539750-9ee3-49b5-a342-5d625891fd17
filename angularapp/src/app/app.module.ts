import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/user/register/register.component';
import { HomepageComponent } from './components/user/homepage/homepage.component';
import { BookEventComponent } from './components/user/book-event/book-event.component';
import { ViewBookedEventComponent } from './components/user/view-booked-event/view-booked-event.component';
import { AddRefereeComponent } from './components/admin/add-referee/add-referee.component';
import { ViewUserComponent } from './components/admin/view-user/view-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    BookEventComponent,
    ViewBookedEventComponent,
    AddRefereeComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
