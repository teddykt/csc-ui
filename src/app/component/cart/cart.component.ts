import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/cart.model';
import { getCreationMode } from '@angular/core/src/render3/instructions';
import { CartService } from '../../service/cart.service';
import { Observable } from 'rxjs';
import { ItemService } from '../../service/item.service';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';
import { CartItemService } from '../../service/cartItem.service';
import { CartItem } from '../../model/cartItem.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  currentCart: Cart;
  currentUser: User;
  currentCartItems: CartItem[];

  remove(cartItem) {
    console.log(cartItem)
    this.cartItemService.removeCartItem(cartItem)
    .subscribe( data => {
      alert("Item deleted from cart successfully.");
      this.cartItemService.getItemsInCart(this.cartService.currentCart)
      .subscribe( data => this.currentCartItems = data)
    
    }); 
  }
  
  constructor(private router:Router, private cartService: CartService, private cartItemService: CartItemService, private userService: UserService) { }

  ngOnInit() {  
    this.currentCart = this.cartService.currentCart;
    this.currentUser = this.userService.currentUser;
    this.cartItemService.getItemsInCart(this.cartService.currentCart)
      .subscribe( data => this.currentCartItems = data)
    
  }

}
