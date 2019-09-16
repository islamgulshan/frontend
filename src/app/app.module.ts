import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { RegistrationComponent } from './Registration/Registration.component';
import { AppComponent } from './app.component';

@NgModule({
   declarations: [
      AppComponent,
      RegistrationComponent
   ],
   imports: [
      BrowserModule,FormsModule,ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
     AppComponent,
     RegistrationComponent
   ]
})
export class AppModule { }
