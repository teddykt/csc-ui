import { Item } from "./item.model";
import { User } from "./user.model";
import { CartItem } from "./cartItem.model";

export class Cart {

    id: number;
    grandTotal: number;
    user: User;
    cartItem: CartItem;

}