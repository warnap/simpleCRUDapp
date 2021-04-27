import { Category } from "../category/category";

export interface Offer {
    id: number;
    title: string;
    description: string;
    price: number;
    category: Category;
}