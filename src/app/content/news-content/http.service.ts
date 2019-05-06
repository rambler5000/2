import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {new_news} from './new_news';
  
@Injectable()
export class HttpServic{
  
    constructor(private http: HttpClient){ }

    getData(id:number,category:string){
         
        return this.http.get(`http://localhost:3000/server_test?id=${id}&category=${category}`); 
    }
}