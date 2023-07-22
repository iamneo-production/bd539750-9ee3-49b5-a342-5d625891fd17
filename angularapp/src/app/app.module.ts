import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddRefereeComponent } from './Admin/add-referee/add-referee.component';
import { AddTeamComponent } from './Admin/add-team/add-team.component';
import { TeamsComponent } from './Admin/teams/teams.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRefereeComponent,
    AddTeamComponent,
    TeamsComponent,
    AdminHeaderComponent,
    
    
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
