import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { Item } from '../../model/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  item: Item;
  
  addToCart() {

  }
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getCurrentItem();
  }
}
