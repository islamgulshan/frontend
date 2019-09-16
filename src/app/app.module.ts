import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { RegistrationComponent } from './Registration/Registration.component';

@NgModule({
   declarations: [
      RegistrationComponent
   ],
   imports: [
      BrowserModule,FormsModule,ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
     RegistrationComponent
   ]
})
export class AppModule { }
