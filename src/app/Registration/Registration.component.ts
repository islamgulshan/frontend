import { Component, OnInit } from '@angular/core';
import {  LoginService } from '../login.service';
import { FormGroup,FormControl,Validators,AbstractControl, ValidationErrors } from '@angular/Forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-Registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css']
})
export class RegistrationComponent implements OnInit {
  invalidLogin: boolean; 
  constructor ( private _myservice :LoginService,private router: Router){}

  ngOnInit() {
  }

  public loginform = new FormGroup({
		password: new FormControl("", [
								Validators.required,
								Validators.minLength(5)
								]
							)
								,
		email: new FormControl("", [
								Validators.required,
								Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
								]
							)
														
	})
	
	//Get Name Getters
	
	get password() {
		return this.loginform.get("password");
	}

	// Getters
	get email() {
		return this.loginform.get("email");
	}


	login() {
    
		let reservationsadd = {
			password: this.loginform.value.password,
			email: this.loginform.value.email
		};
			
    this._myservice.login(reservationsadd)
    .subscribe(result => { 
      if (result) 
        this.router.navigate(['/dasbboard']);
      else  
        this.invalidLogin = true; 
        
    });
}

     
  
	
		 
	
}
