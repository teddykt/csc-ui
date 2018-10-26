import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Cookie } from 'ng2-cookies';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { CartService } from './cart.service';
import { CartItemService } from './cartItem.service';
  
@Injectable()
export class LoginService {

  constructor (private router: Router, private http: Http, private userService : UserService, private cartService : CartService, private cartItemService : CartItemService) {}

  incorrect: boolean;
  loggedIn: boolean;

  obtainAccessToken(loginData){
    let params = new URLSearchParams();
    params.append('username',loginData.username);
    params.append('password',loginData.password);    
    params.append('grant_type','password');
    params.append('client_id','TestClient');
    let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic '+btoa("TestClient:f2a1ed52710d4533bde25be6da03b6e3")});
    let options = new RequestOptions({ headers: headers });
    console.log(params.toString());
     this.http.post('http://localhost:8080/oauth/token', params.toString(), options)
    .pipe(map(res => res.json()))
    .subscribe(
      data => {this.saveToken(data, loginData.username), this.incorrect = false},
      err => {this.incorrect = true}
    );       
  }


  saveToken(token, username){
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set("access_token", token.access_token, expireDate);
    console.log('Obtained Access token');
    this.loggedIn = true;
    this.userService.getSetCurrentUser(username)
    this.cartService.getSetCurrentCart(username)
    this.router.navigate(['/home']);
  }


  // sendCredential(username: string, password: string) {
  //   let url = "http://localhost:8080/index";
  //   let params = 'username='+username+'&password='+password;
  //   let headers = new Headers ({
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //   })
  //   return this.http.post(url, params, {headers: headers, withCredentials : true});
  // }

  // logout() {
  //    let url = "http://localhost:8080/logout";
  //    return this.http.get(url, { withCredentials: true });
  //  }
  logout() {
    Cookie.delete('access_token');
    this.loggedIn = false;
    this.userService.currentUser = null;
    this.cartService.currentCart = null;
    this.router.navigate(['/signin']);
  }

  isLoggedIn(){
    if (!Cookie.check('access_token')) {
      this.loggedIn = false;
    }
    else {
      this.loggedIn = true;
    }
  }

  checkCredentials(){
    if (!Cookie.check('access_token')){
        this.router.navigate(['/signin']);
    }
  }
}