import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { Item } from '../../model/item.model';
import { Location } from '@angular/common';
import { Cart } from '../../model/cart.model';
import { CartService } from '../../service/cart.service';
import { CartItem } from '../../model/cartItem.model';
import { CartItemService } from '../../service/cartItem.service';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  item: Item;
  cartItem: CartItem = new CartItem();
  itemQty: number;

  goBack() {
    window.history.back();

  }
  
  addToCart(): void {
            this.cartItem.item = this.item;
            this.cartItem.cart = this.cartService.currentCart;
            this.cartItem.qty = this.itemQty;
            this.cartItem.subTotal = (this.itemQty * this.item.price);
            console.log(this.cartItem);
            this.cartItemService.addToCart(this.cartItem)
              .subscribe( data => {
                console.log(data);
                alert("Item added to cart successfully.");
              });
            }
  constructor(private itemService: ItemService, private userService: UserService,private cartItemService: CartItemService, private cartService: CartService, private _location: Location,) { }

  ngOnInit() {
    this.item = this.itemService.getCurrentItem();
    console.log(this.item);
  }
}
