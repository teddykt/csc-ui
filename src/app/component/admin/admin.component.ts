import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item.model';
import { ItemService } from '../../service/item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit {
item: Item = new Item();
type: boolean = this.antique(this.item.type);


  constructor( private itemService: ItemService) { }

  addItem(): void {
    this.itemService.addItem(this.item)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

  outer(type: string) {
    if ((type!=="antique") && (type!=="fashion")) {
      return false;
    }
    else {
      return true;
    }
  }

 
  antique(type: string) {
    if (type=="antique") {
      return true;
    }
    else {
      return false;
    }
  }
  
  ngOnInit() {
  }
}  