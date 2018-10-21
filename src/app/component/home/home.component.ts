import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { AppService } from '../../service/app.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../service/login.service';
import { Cart } from '../../model/cart.model';
import { CartService } from '../../service/cart.service';

// import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( ) {
    
  }
  ngOnInit() { 
  }

}
