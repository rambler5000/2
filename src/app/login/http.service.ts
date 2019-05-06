import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    //http://localhost:60489/Home/PostUser  ASP.NET MVC 5
    //http://localhost:8080/angular/setUser.php     PHP
    // http://localhost:60820/api/values        ASP NET Wep API 2
    check(token:string){
        return this.http.get(`http://localhost:3000/acces_check?token=${token}`); 
    }
}