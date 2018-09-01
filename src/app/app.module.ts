import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';


const appRoutes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'cart', component: CartComponent},
  { path: 'item', component: ItemComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    CartComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
