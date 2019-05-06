import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = 'http://localhost:3000/api';
  token;
  uri: string;
  access;
  check=false;
  constructor(private http: HttpClient,private router: Router) { }
  login(user: string, password: string) {
    this.http.post(this.api + '/authenticate', {user: user,password: password})
    .subscribe((resp: any) => {
     
      this.router.navigate(['../']);
      localStorage.setItem('token', resp.token);
      console.log(localStorage.getItem('token'));
      });
       
  }

    logout() {
     // localStorage.removeItem('token');
      localStorage.clear();
    }

    access_check() {
      this.check=true;
      this.token=localStorage.getItem('token');
      this.http.get(`http://localhost:3000/access_check?token=${this.token}`)
       .subscribe(
              (data:any) => {this.access=data},
              error => console.log(error),
              ()=>{
                  if(this.access=='1' || this.access=='2')
                  {
                    this.check=true;
                  }
                  else
                  {
                    this.check=false;
                  }
                  console.log(this.check);
              }
       );
       //console.log(this.access);
       
    }

    
    
    
   
    public get logIn(): boolean {
      console.log(localStorage.getItem('token'));
      return (localStorage.getItem('token') != null);
    }
}
