import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../model/user.model';
import { Observable, pipe } from 'rxjs';
import { CartService } from './cart.service';
import { Cookie } from 'ng2-cookies';


const httpOptions = {
 headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+Cookie.get('access_token')})
}
@Injectable()
export class UserService {
  currentUser: User;

  constructor(private http:HttpClient, private cartService:CartService) {}

  private userUrl = 'http://localhost:8080/user';
	//private userUrl = '/api';

  // public getUsers() {
  //   return this.http.get<User[]>(this.userUrl, { withCredentials: true });
  // }

  public getUser(username) {
    return this.http.get<User>(this.userUrl + "/"+ username, { withCredentials: true });
  }

  public getSetCurrentUser(username){
    var resourceUrl = this.userUrl + "/"+ username
    //var headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+Cookie.get('access_token')});
    return this.http.get<User>(resourceUrl, httpOptions)
                   .subscribe(data => {this.currentUser = data,
                  console.log(data)})
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id, { withCredentials: true });
  }

  public createUser(user) {
    
    return this.http.post<User>(this.userUrl + "s/"+ "register", user, { withCredentials: true });
    
  }


  
  // public getSetCurrentUser(username) {
  //   this.getUser(username)
  //   .subscribe(
  //     data => this.currentUser = data

  //  // this.cartService.currentCart = this.cartService.getSetCurrentCart(username);
  //   )      
  //   console.log(this.currentUser);
  // }
}