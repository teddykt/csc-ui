import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { Item } from '../../model/item.model';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  items: Item[];
  type: string;
  

  constructor(private itemService: ItemService) { }
  
  @ViewChild(NavbarComponent) child;


  ////////////////////navbar
  onAntiqueClick(): void {
    this.type = 'antique';
    console.log(this.type);
  };

  onFashionClick(): void {
    this.type = 'clothes';
    console.log(this.type);
  };


  ngOnInit() {
    this.itemService.getItems()
      .subscribe( data => {
        this.items = data;
        console.log(data);
      });
      this.type = 'all';
  }

}
