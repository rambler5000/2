import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {new_news} from './new_news';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    //http://localhost:60489/Home/PostUser  ASP.NET MVC 5
    //http://localhost:8080/angular/setUser.php     PHP
    // http://localhost:60820/api/values        ASP NET Wep API 2
    postData(new_news: new_news,token:string){
         
        const body = {news_headline: new_news.news_headline, news_text:new_news.news_text,category: new_news.category,token:token};
        return this.http.post('http://localhost:3000/give_news', body); 
    }
}