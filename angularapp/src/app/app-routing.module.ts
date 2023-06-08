import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent}, 
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule)},
  {path: 'user', loadChildren: () => import('./user/user.module').then(s => s.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
