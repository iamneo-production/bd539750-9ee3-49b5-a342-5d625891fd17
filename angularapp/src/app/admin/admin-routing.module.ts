import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRefereeComponent } from './add-referee/add-referee.component';
import { OrganiserListComponent } from './organiser-list/organiser-list.component';
const routes: Routes = [
  {path: "", component:AddRefereeComponent, 
    children: [
      {path: "venues", component:OrganiserListComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
