import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {new_news} from './new_news';
  
@Injectable()
export class HttpServic{
  
    constructor(private http: HttpClient){ }

    getData(id:number,category:string){
         
        return this.http.get(`http://localhost:3000/server_test?id=${id}&category=${category}`); 
    }
    check(token:string,user:string){
        //console.log('253535353535353535353535353535353535353')
         //console.log(token);
        return this.http.get(`http://localhost:3000/delete_news_check?token=${token}&user=${user}`); 
    }
    delete(news_headline:string){
        return this.http.get(`http://localhost:3000/delete_news?news_headline=${news_headline}`); 
    }
}