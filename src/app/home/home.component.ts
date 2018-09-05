import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { AppService } from '../service/app.service';
import { HttpClient } from '@angular/common/http';


// import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  users: User[];
  user: User = new User();

  errorMessage:string;

  constructor( private router: Router, private userService: UserService, private app: AppService, private http: HttpClient) {
  }

  authenticated() { return this.app.authenticated; }
  
  createUser(): void {
    this.userService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;

      });
  };

    // login(){
    //   this.authService.logIn(this.user)
    //     .subscribe(data=>{
    //       this.router.navigate(['/profile']);
    //       },err=>{
    //       this.errorMessage="error :  Username or password is incorrect";
    //       }
    //     )
    // }
}
