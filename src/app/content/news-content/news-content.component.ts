import { Component, OnInit } from '@angular/core';
import {new_news} from './new_news';
import { HttpServic} from './http.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}