import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-registrator',
  templateUrl: './registrator.component.html',
  styleUrls: ['./registrator.component.css']
})
export class RegistratorComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
