import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { LoginComponent } from './login/login.component';
import { AddRefereeComponent } from './admin/add-referee/add-referee.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { SignupComponent } from './signup/signup.component';
import { OrganiserListComponent } from './admin/organiser-list/organiser-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddRefereeComponent,
    AdminHeaderComponent,
    SignupComponent,
    FilterPipePipe,
    OrganiserListComponent
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
