import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulesComponent } from './Admin/schedules/schedules.component';
import { ViewbookEventComponent } from './User/viewbook-event/viewbook-event.component';

const routes: Routes = [
  {
    path: 'view-schedules',
    component: SchedulesComponent,
  },
  {
    path: 'view-book-event',
    component: ViewbookEventComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
