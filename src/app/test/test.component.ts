import { Component, OnInit } from '@angular/core';
import {new_news} from '../content/news-content/new_news';
import { HttpServic} from './http.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [HttpServic]
})

export class TestComponent implements OnInit {
  news: new_news;
  a='';
b='';
c='';
d='';
id:number;
category:string;
check:boolean;
  constructor(private httpServic: HttpServic,private http: HttpClient,private route: ActivatedRoute) { }
  /* getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
id = this.getUrlParameter('id');
category =this.getUrlParameter('category');*/
  

submit(){
  this.httpServic.delete(this.a)
          .subscribe(
              (data:any) => {},
              error => console.log(error)
          );
}




  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.category = this.route.snapshot.params['category'];
    //console.log(this.id);
    //console.log(this.category);
    this.httpServic.getData(this.id,this.category)
    .subscribe(
        (data: any) => {this.a=data.news_headline;this.b=data.news_text;this.c=data.category;this.d=data.users},
        error => console.log(error),
        ()=>{
          this.httpServic.check(localStorage.getItem('token'),this.d)
          .subscribe(
              (data:any)=>{this.check=data},
              error => console.log(error),
              ()=>
              {
                  console.log(this.check)

              }
          );
        }
    );

  }
}
