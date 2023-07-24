import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SchedulesComponent } from './Admin/schedules/schedules.component';
import { ViewbookEventComponent } from './User/viewbook-event/viewbook-event.component';

@NgModule({
  declarations: [
    AppComponent,
    SchedulesComponent,
    ViewbookEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
