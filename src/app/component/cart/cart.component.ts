import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/cart.model';
import { getCreationMode } from '@angular/core/src/render3/instructions';
import { CartService } from '../../service/cart.service';
import { Observable } from 'rxjs';
import { ItemService } from '../../service/item.service';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  currentCart: Cart;
  currentUser: User;

  // remove(cart) {
  //   this. = cart;
  //   this.cartService.removeCart(this.cart)
  //   .subscribe( data => {
  //     alert("Item deleted from cart successfully.");
  //   }); 
  //     console.log(this.cart);
  // }
  
  constructor(private cartService: CartService, private userService: UserService) { }

  ngOnInit() {  
    this.currentCart = this.cartService.getCurrentCart();
    this.currentUser = this.userService.getCurrentUser();
    
    console.log(this.currentUser);
    console.log(this.currentCart);
  }

}
