import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SchedulesComponent } from './Admin/schedules/schedules.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { ViewbookEventComponent } from './User/viewbook-event/viewbook-event.component';
import { UserHeaderComponent } from './User/user-header/user-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SchedulesComponent,
    AdminHeaderComponent,
    ViewbookEventComponent,
    UserHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
