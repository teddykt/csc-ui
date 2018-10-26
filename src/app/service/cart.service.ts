import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Item } from '../model/item.model';
import { Cart } from '../model/cart.model';
import { CartItem } from '../model/cartItem.model';
import { Cookie } from 'ng2-cookies';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+Cookie.get('access_token')})
 }

@Injectable()
export class CartService {
    currentCart: Cart;

  constructor(private http:HttpClient) {}

  
  private cartUrl = 'http://localhost:8080/cart';
	//private cartUrl = '/api';

  // public removeCart(cart) {
  //   return this.http.delete(this.cartUrl + "/" + "delete", { withCredentials: true });
  // }

  public getSetCurrentCart(username){
    var resourceUrl = this.cartUrl + "/"+ username
    //var headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+Cookie.get('access_token')});
    return this.http.get<Cart>(resourceUrl, httpOptions)
                   .subscribe(data => {this.currentCart = data,
                  console.log(data)})
  }
  // public getSetCurrentCart(username) {
  //   this.findCartByUsername(username)
  //   .subscribe(
  //     data => this.currentCart = data
  //   )
  //   console.log(this.currentCart)
  // }

}