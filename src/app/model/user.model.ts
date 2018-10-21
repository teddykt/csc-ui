import { Item } from "./item.model";
import { Cart } from "./cart.model";

export class User {

    userId: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cart: Cart;
    history: Array<Item>;
    enabled: boolean = true;
}