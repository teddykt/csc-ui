import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { Cart } from '../../model/cart.model';
import { UserService } from '../../service/user.service';
import { LoginService } from '../../service/login.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  users: User[];
  user: User = new User();

  incorrect: boolean;
  loggedIn: boolean;
  username: string;
  password: string;

  currentUser: User;
  currentCart: Cart;
  constructor(private loginService: LoginService,  private cartService: CartService, private userService: UserService) { 
    
    if(sessionStorage.getItem('PortalAdminHasLoggedIn') == '' || sessionStorage.getItem('PortalAdminHasLoggedIn') == null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }

onSubmit() {
  this.loginService.sendCredential(this.username, this.password).subscribe(
    res => {
      if (res.url == "http://localhost:8080/success") {
        this.loggedIn=true;
        sessionStorage.setItem('PortalAdminHasLoggedIn', 'true');
        this.incorrect = false;

              this.userService.getUser(this.username)
                .subscribe( data => { 
                  this.userService.setCurrentUser(data);
                  this.currentUser = this.userService.getCurrentUser();
                    this.cartService.findCartByUsername(this.currentUser.username)
                      .subscribe( data => {
                        this.cartService.setCurrentCart(data);
                        this.currentCart = this.cartService.getCurrentCart();
                      });
                });
                window.location.href = '/home';
      }
      else {
        this.incorrect = true ;
      }
    },
    err => console.log(err)
  ); 

};
  ngOnInit() {
  }

}
