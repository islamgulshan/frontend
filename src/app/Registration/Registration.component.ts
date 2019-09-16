import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-Registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public registrationForm = new FormGroup({
    name : new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit() {
  }

  onSubmit(param){
    console.log(param);
  }

}
