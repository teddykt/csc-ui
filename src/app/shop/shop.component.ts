import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  items: Item[];

  prices = ['$139','$235','$23','$5355','$233', '$139','$235','$23','$5355','$139','$235','$23','$5355','$139','$235','$23','$5355', ]
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe( data => {
        this.items = data;
        console.log(data);
      });
  }

}
