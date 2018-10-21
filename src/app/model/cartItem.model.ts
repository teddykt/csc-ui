import { Item } from "./item.model";
import { User } from "./user.model";
import { Cart } from "./cart.model";

export class CartItem {

    id: number;
    qty: number;
    subTotal: number;
    item: Item;
    cart: Cart;

}