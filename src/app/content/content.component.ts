import { Component, OnInit,DoCheck} from '@angular/core';
import {new_news} from './new_news';
import { HttpServic} from './http.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [HttpServic]
})


export class ContentComponent implements OnInit,DoCheck{

r='gregre';
arr=[];
//category='категория1';
a='1';
b='2';
c='3';

private category: string;
private category_new: string;
private subscription: Subscription;

constructor(private httpServic: HttpServic,private http: HttpClient ,private route: ActivatedRoute){}
/*submit(){
    this.httpServic.getData()
    .subscribe(
        (data: any) => {this.text=data;},
        error => console.log(error),
        () => console.log(this.text)
    );
}*/

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params=>this.category_new=params['category']);
    this.httpServic.getData(this.category_new)
    .subscribe(
        (data: any) => {this.arr=data;},
        error => console.log(error)
    );
  }
  ngDoCheck() {

      if(this.category!=this.category_new)
      {
        this.category=this.category_new;
        this.httpServic.getData(this.category)
        .subscribe(
            (data: any) => {this.arr=data;},
            error => console.log(error)
        );
      }
  }
  ngAfterViewChecked() {
    

  }


  }

  