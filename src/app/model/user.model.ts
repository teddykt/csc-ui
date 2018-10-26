import { Item } from "./item.model";
import { Cart } from "./cart.model";

export class User {

    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cart: Cart;
}