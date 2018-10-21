import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../model/user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  currentUser: User;

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/user';
	//private userUrl = '/api';

  // public getUsers() {
  //   return this.http.get<User[]>(this.userUrl, { withCredentials: true });
  // }

  public getUser(username) {
    return this.http.get<User>(this.userUrl + "/"+ username, { withCredentials: true });
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id, { withCredentials: true });
  }

  public createUser(user) {
    
    return this.http.post<User>(this.userUrl + "/"+ "register", user, { withCredentials: true });
    
  }


  
  public getCurrentUser() {
    return this.currentUser;
  }
  public setCurrentUser(user) {
      this.currentUser = user;
  }
}