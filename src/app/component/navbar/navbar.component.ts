import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
//   static type: string;
//   type: string = 'antique';
//   static getType() {
//     return this.type;
// }
  
//   onAntiqueClick(): void {
//     this.type = 'antique';
//     console.log(this.type);
//   };

//   onFashionClick(): void {
//     this.type = 'fashion';
//     console.log(this.type);
//   };

  constructor() { }

  ngOnInit() {
  }

}
