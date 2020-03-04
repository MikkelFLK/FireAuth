import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { ProfileCreateComponent } from './profile-create/profile-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ProfileComponent, ProfileCreateComponent, ProfileEditComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        AngularFireAuthModule,
        ReactiveFormsModule,
      RouterModule
    ]
})
export class ProfileModule { }
