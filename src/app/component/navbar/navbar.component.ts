import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from '../../service/item.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  type: string;

  ////////////////////navbar
  onAntiqueClick(): void {
    this.itemService.setLocation('antique');
    // this.type = this.itemService.getLocation();
  };

  onFashionClick(): void {
    this.itemService.setLocation('fashion');
    // this.type = this.itemService.getLocation();
  };
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

}
