import { Injectable } from '@angular/core';
import{ Http, Headers } from '@angular/http';
import { MyForm } from "./supplier/Myform"; 

import { map } from  'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SupplierService  {
 
  constructor( private _http : Http) { }
  // Get all Reservation
   getAllsupplier (){

    return this._http.get('https://boiling-anchorage-33456.herokuapp.com/api/get_all_suppler').pipe(map(res=>res.json()));


  }

  // save data 
  addsuppleir(newreservation){    
    var header = new Headers();
    header.append("Content-Type", "application/json");
    return this._http
      .post("https://boiling-anchorage-33456.herokuapp.com/api/addsuppler", newreservation)
      .pipe(map(res => res.json()));
}

//  // Delete Reservation 
deletesupplair(id){  
  var header = new Headers();
  header.append("Content-Type", "application/json");
  // var data={
  //   id:id
  // }
  return this._http
    .delete("https://boiling-anchorage-33456.herokuapp.com/api/deletesupplair/"+id)
    .pipe(map(res => res.json()));
 }


editsuppliers(editrecord){    
  var header = new Headers();
  header.append("Content-Type", "application/json");
  return this._http
    .put("https://boiling-anchorage-33456.herokuapp.com/api/updatsuppleir", editrecord)
    .pipe(map(res => res.json()));
}



}
