import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Item } from '../model/item.model';
import { Cart } from '../model/cart.model';
import { Cookie } from 'ng2-cookies';
import { CartItem } from '../model/cartItem.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Bearer '+Cookie.get('access_token')})
 }

@Injectable()
export class CartItemService {
    currentCart: Cart;
    currentCartItems: CartItem[];
  constructor(private http:HttpClient) {}

  
  private cartItemUrl = 'http://localhost:8080/cartItem';
	//private cartItemUrl = '/api';

  public addToCart(cartItem) {
    var resourceUrl = this.cartItemUrl + "/add";
    return this.http.post<CartItem>(resourceUrl, cartItem, httpOptions);
  }

  public getItemsInCart(cart) {
    var resourceUrl = this.cartItemUrl + "/get";
    return this.http.post<CartItem[]>(resourceUrl, cart, httpOptions);
  }

  public removeCartItem(cartItem) {
    return this.http.post(this.cartItemUrl + "/delete", cartItem, httpOptions);
  }
}