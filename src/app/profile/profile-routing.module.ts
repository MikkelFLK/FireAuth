import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {ProfileCreateComponent} from './profile-create/profile-create.component';
import {ProfileEditComponent} from './profile-edit/profile-edit.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'create',
    component: ProfileCreateComponent
  },
  {
    path: 'edit',
    component: ProfileEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
