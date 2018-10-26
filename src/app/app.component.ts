import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { tokenKey } from '@angular/core/src/view';
import { LoginService } from './service/login.service';
import { UserService } from './service/user.service';
import { CartService } from './service/cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedIn: boolean;

  constructor (private loginService:LoginService, private userService:UserService, private cartService:CartService) {
        this.loggedIn = this.loginService.loggedIn;
  }
  logout() {
    this.loginService.logout();
  }
  ngOnInit() {

    console.log(this.userService.currentUser.username);
    console.log(this.cartService.currentCart.grandTotal);
    this.loginService.isLoggedIn();
    console.log(Cookie.get('access_token'));
  }
}
