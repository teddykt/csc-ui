import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Item } from '../model/item.model';
import { Cart } from '../model/cart.model';
import { CartItem } from '../model/cartItem.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CartService {
    currentCart: Cart;

  constructor(private http:HttpClient) {}

  
  private cartUrl = 'http://localhost:8080/cart';
	//private cartUrl = '/api';

  public removeCart(cart) {
    return this.http.delete(this.cartUrl + "/" + "delete", { withCredentials: true });
  }
  public getCurrentCart() {
    return this.currentCart;
  }
  public setCurrentCart(cart) {
    this.currentCart = cart;
  }

  public findCartByUsername(username) {
    return this.http.get<Cart>(this.cartUrl+ "/" + username, { withCredentials: true });
  }



    

}