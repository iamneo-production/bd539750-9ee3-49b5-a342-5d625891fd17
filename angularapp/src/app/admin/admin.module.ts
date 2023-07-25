import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AddRefereeComponent } from './add-referee/add-referee.component';
import { FormsModule } from '@angular/forms';
import { OrganiserListComponent } from './organiser-list/organiser-list.component';


@NgModule({
  declarations: [AddRefereeComponent,OrganiserListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,FormsModule
  ],
  exports: [RouterModule]
})
export class AdminModule { }
