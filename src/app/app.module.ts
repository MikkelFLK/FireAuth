import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {LoginService} from './login/login.service';
import {AngularFireAuthModule} from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
