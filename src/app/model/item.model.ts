import { CartItem } from "./cartItem.model";

export class Item {

    id: number;
    name: string;
    price: number;
    detail: string;
    quantity: number;
    type: string;
    category: string;
    cartItem: CartItem;
}