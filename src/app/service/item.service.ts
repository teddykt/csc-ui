import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Item } from '../model/item.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemService {

  constructor(private http:HttpClient) {}

  private itemUrl = 'http://localhost:8080/items';
	//private itemUrl = '/api';

  public getItems() {
    return this.http.get<Item[]>(this.itemUrl, { withCredentials: true });
  }

  public deleteItem(item) {
    return this.http.delete(this.itemUrl + "/"+ item.id, { withCredentials: true });
  }

  public addItem(item) {
    return this.http.post<Item>(this.itemUrl + "/"+ "add", item, { withCredentials: true });
  }

}