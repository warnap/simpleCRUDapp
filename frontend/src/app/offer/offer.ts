import { Timestamp } from "rxjs/internal/operators/timestamp";
import { Category } from "../category/category";

export interface Offer {
    id: number,
    title: string,
    price: number,
    created_at: number,
    category: Category,
}