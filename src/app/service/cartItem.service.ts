import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Item } from '../model/item.model';
import { Cart } from '../model/cart.model';
import { CartItem } from '../model/cartItem.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CartItemService {
    currentCart: Cart;

  constructor(private http:HttpClient) {}

  
  private cartItemUrl = 'http://localhost:8080/';
	//private cartItemUrl = '/api';

  public addToCart(cartItem) {
    return this.http.post<CartItem>(this.cartItemUrl + "addToCart", cartItem, { withCredentials: true });
  }

}