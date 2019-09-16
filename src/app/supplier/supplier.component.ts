import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators,AbstractControl, ValidationErrors } from '@angular/Forms';
import {  SupplierService } from '../supplier.service';

import {  MyForm } from './Myform';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

   
  public suppleir : MyForm[];
  public status_list=["Active", "Pending", "Decline"];
  public isDone=1; 
  public editId='';
	constructor ( private _myservice :SupplierService){}
	
	ngOnInit() {
		this._myservice.getAllsupplier().subscribe( res =>  this.suppleir=res)
		 
	}



	public supplierform = new FormGroup({
    
    company_name: new FormControl("", Validators.required ),
    name: new FormControl("", 	Validators.required),
		email: new FormControl("", [
								Validators.required,
								Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
								]
							),						
    phone: new FormControl("", Validators.required),
		status_user: new FormControl("",	Validators.required)
	})
	
	//Get Name Getters
	
	  get company_name() {
		return this.supplierform.get("company_name");
	}

  // Getters
	get name() {
		return this.supplierform.get("name");
  }
  
	// Getters
	get email() {
		return this.supplierform.get("email");
	}
	
	//Get Name Getters
	
		// Getters
    get phone() {
      return this.supplierform.get("phone");
    }
	
	 
    get status_user() {
      return this.supplierform.get("status_user");
    }
	
// 	constructor(private spinner: NgxSpinnerService) {}
	
supplairDelete(i)
 	{
	 // console.log(i);
	  
   this._myservice.deletesupplair(i).subscribe(result => {
		this.suppleir.splice(i,1);	
		//this.reservation.push(result.reservationn);
	});


	 
 	}
	
 	Addsuppler() {
    
	let sulllerr = {
		company_name: this.supplierform.value.company_name,
		name: this.supplierform.value.name,
		email: this.supplierform.value.email,
		phone: this.supplierform.value.phone,
		status_user: this.supplierform.value.status_user 
    };
		
	  
	this._myservice.addsuppleir(sulllerr).subscribe(result => {
    
			this.suppleir.push(result.suppliers);
		});

  	  
     this.supplierform.reset(); 
      this.isDone=1;
	   
   }
   public index='';
   SublierEdit(i,actualId){ 
    this.isDone=0;
    this.index=i;
		this.supplierform.get("company_name").setValue(this.suppleir[i].company_name);
		this.supplierform.get("email").setValue(this.suppleir[i].email)
		this.supplierform.get("name").setValue(this.suppleir[i].name)
		this.supplierform.get("phone").setValue(this.suppleir[i].phone);
		this.supplierform.get("status_user").setValue(this.suppleir[i].status_user) 
		this.editId = actualId 
   }


   updatesuppleirs(){
		
		var data = {
			id : this.editId,
			contact : {
				company_name: this.supplierform.value.company_name,
				email: this.supplierform.value.email,
				name: this.supplierform.value.name,
				phone: this.supplierform.value.phone,
				status_user: this.supplierform.value.status_user
			}
		}

		// console.log(data);

    // return false; 

		  this.suppleir[this.index].company_name=this.supplierform.value.company_name;
      this.suppleir[this.index].name=this.supplierform.value.name;
      this.suppleir[this.index].email=this.supplierform.value.email;
      this.suppleir[this.index].phone=this.supplierform.value.phone;
      this.suppleir[this.index].status_user=this.supplierform.value.status_user;

		this._myservice.editsuppliers(data).subscribe(result => {
    
      
  });

 
		 	  
 	 }
  
  

 
 
 // ReservationDelete
  

  
}
