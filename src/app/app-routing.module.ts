import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'login',
  loadChildren: './login/login.module#LoginModule'
  },
  {path: 'user',
  loadChildren: './profile/profile.module#ProfileModule'}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
