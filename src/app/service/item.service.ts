import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Item } from '../model/item.model';
import { Cart } from '../model/cart.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemService {

  constructor(private http:HttpClient) {}

  location: string = 'all';
  currentItem: Item;
  
  private itemUrl = 'http://localhost:8080/items';
	//private itemUrl = '/api';

  public findItemList(): Observable<any> {
    return this.http.get(this.itemUrl, { withCredentials: true });
  }

  public findByName(item) {
    return this.http.get<Item>(this.itemUrl + "/" + item.name, { withCredentials: true });
  }

  public deleteItem(item) {
    return this.http.delete(this.itemUrl + "/"+ item.id, { withCredentials: true });
  }

  public addItem(item) {
    return this.http.post<Item>(this.itemUrl + "/"+ "add", item);
  }

  public getCurrentItem() {
    return this.currentItem;
  }
  public setCurrentItem(item) {
      this.currentItem = item;
  }
  public getLocation() {
    return this.location;
  }
  public setLocation(loc) {
      this.location = loc;
  }
    

}