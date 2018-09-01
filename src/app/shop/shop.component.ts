import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  prices = ['$139','$235','$23','$5355','$233', '$139','$235','$23','$5355','$139','$235','$23','$5355','$139','$235','$23','$5355', ]
  constructor() { }

  ngOnInit() {
  }

}
