import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { Item } from '../../model/item.model';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  items: Item[];
  type: string;
  

  constructor(private route: ActivatedRoute, private itemService: ItemService) { }




  onClick(item): void {
    this.itemService.setCurrentItem(item);
  }



  ngOnInit() {

    this.itemService.findItemList()
      .subscribe( data => {
        this.items = data;
        this.route.params
          .subscribe( params => this.type = params.type );
      });

      

  }

}
