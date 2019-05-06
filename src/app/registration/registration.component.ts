import { Component, OnInit } from '@angular/core';
import {users} from './users';
import { HttpService} from './http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [HttpService]
})
export class RegistrationComponent implements OnInit {
check:boolean;
check1:boolean;
n:any;
  new_user: users=new users(); // данные вводимого пользователя
  
  receivednew_news: users; // полученный пользователь
  constructor(private httpService: HttpService,private http: HttpClient) { }

  emailcheck(email):boolean { 
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email); 
 } 
 
   submit(new_user: users){
    if(this.check=this.emailcheck(new_user.email))
    {
      this.check1=false;
      this.httpService.user_check(new_user)
            .subscribe(
                (data: any) => {this.n=data},
                error => console.log(error),
                ()=>{
                  if(this.n=='0')
                  {
                    this.check1=true;
                     this.httpService.give_user(new_user)
                      .subscribe(
                      (data: users) => {this.receivednew_news=data},
                      error => console.log(error)
                      );
    }

                }
                
            );
            console.log(this.n);
    
  }
  }

  ngOnInit() {
    this.check=true;
    this.check1=true;
  }

}



