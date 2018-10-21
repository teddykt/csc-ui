import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './component/shop/shop.component';
import { CartComponent } from './component/cart/cart.component';
import { ItemComponent } from './component/item/item.component';
import { InfoComponent } from './component/info/info.component';
import { AppService } from './service/app.service';
import { UserService } from './service/user.service';
import { ItemService } from './service/item.service';
import { AdminComponent } from './component/admin/admin.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ItemFilterPipe } from './item-filter.pipe';
import { ProfileComponent } from './component/profile/profile.component';
import { HistoryComponent } from './component/history/history.component';

// import { AuthService } from './auth.service';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}
const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'cart', component: CartComponent},
  { path: 'item', component: ItemComponent},
  { path: 'info', component: InfoComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    CartComponent,
    ItemComponent,
    InfoComponent,
    AdminComponent,
    NavbarComponent,
    ItemFilterPipe,
    ProfileComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [ItemService, AppService,{ provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
