import { Component, OnInit } from '@angular/core';
import {new_news} from './new_news';
import { HttpService} from './http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpService]
})
export class HomeComponent implements OnInit {
  arr=['категория1','категория2','категория3'];
  new_news: new_news=new new_news(); // данные вводимого пользователя
      
  receivednew_news: new_news; // полученный пользователь
  done: boolean = false;
  constructor(private httpService: HttpService,private http: HttpClient ){}
  submit(new_news: new_news){
      this.httpService.postData(new_news,localStorage.getItem('token'))
              .subscribe(
                  (data: new_news) => {this.receivednew_news=data; this.done=true;},
                  error => console.log(error)
              );
  }
  


  ngOnInit(): void {/* // adding the lifecycle hook ngOnInit
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(data => {
      console.log(data); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
    });*/
  }
  
}
