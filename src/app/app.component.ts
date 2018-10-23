import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedIn: boolean;
  static API_URL="http://localhost:8080";
  constructor () {

  }
  ngOnInit() {
        if(sessionStorage.getItem('PortalAdminHasLoggedIn') == '' || sessionStorage.getItem('PortalAdminHasLoggedIn') == null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
    console.log(this.loggedIn);
  }
}
