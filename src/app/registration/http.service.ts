import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {users} from './users';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    //http://localhost:60489/Home/PostUser  ASP.NET MVC 5
    //http://localhost:8080/angular/setUser.php     PHP
    // http://localhost:60820/api/values        ASP NET Wep API 2
    user_check(new_user: users){
        const body = {email: new_user.email, user:new_user.user,password: new_user.password};
        return this.http.post('http://localhost:3000/user_check', body); 
    }
    give_user(new_user: users){
         
        const body = {email: new_user.email, user:new_user.user,password: new_user.password};
        return this.http.post('http://localhost:3000/give_user', body); 
    }
}