import { Injectable } from '@angular/core';

import{ Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { map } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor( private _http : Http,private router: Router) { }

  logout() {
    localStorage.removeItem('access_token');
  }

  login(credintcail){    
    
    var header = new Headers();
    header.append("Content-Type", "application/json");
    return this._http
      .post("https://boiling-anchorage-33456.herokuapp.com/login", credintcail)
      .pipe(map(result => {
        var tokens=result.json();
         if(tokens.isMatch==false){
          return false;
          
         }else{
          localStorage.setItem('access_token',tokens.token);
          
          return true;
        }  
         
        
        
      }) )
  }



  

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }


}
