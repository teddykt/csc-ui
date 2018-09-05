import { Item } from "./item.model";

export class User {

    userId: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cart: Array<Item>;
    history: Array<Item>;
    enabled: boolean = true;
}