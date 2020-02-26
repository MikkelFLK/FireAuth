import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { ProfileCreateComponent } from './profile-create/profile-create.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent, ProfileCreateComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        AngularFireAuthModule,
        ReactiveFormsModule
    ]
})
export class ProfileModule { }
