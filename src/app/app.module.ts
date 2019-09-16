import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { RegistrationComponent } from './Registration/Registration.component';
import { PostComponent } from './post/Post.component';

import { HttpClientModule } from "@angular/common/http";
import { AuthguardService } from './authguard.service';
import { LoginService } from './login.service';

import { HttpModule } from "@angular/http"; 
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { SupplierComponent } from './supplier/supplier.component';

@NgModule({
   declarations: [
      AppComponent,
      RegistrationComponent,
      LoginComponent,
      DashboardComponent,
      NavComponent,
      SupplierComponent,PostComponent
   ],
   imports: [
      BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,HttpModule,
     
      
       RouterModule.forRoot([
         { path: '', component: LoginComponent ,canActivate: [AuthguardService] },
         { path: 'login', component: RegistrationComponent },  
         { path: 'addsupplier', component: SupplierComponent,canActivate: [AuthguardService]  },
         { path: 'dashboard', component: PostComponent,canActivate: [AuthguardService]  },
         { path: '**', component: SupplierComponent,canActivate: [AuthguardService]  }
       ])

   ],
   providers: [AuthguardService,LoginService],
   bootstrap: [
     AppComponent,PostComponent 
   ]
})
export class AppModule { }
