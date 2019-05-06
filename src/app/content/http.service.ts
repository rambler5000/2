import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {new_news} from './new_news';
  
@Injectable()
export class HttpServic{
  
    constructor(private http: HttpClient){ }

    getData(category:string){
         
        return this.http.get(`http://localhost:3000/take_news_categor?category=${category}`); 
        
    }
}