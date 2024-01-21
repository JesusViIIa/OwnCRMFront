import { ICategory } from "./ICategory";
import { IProductTransaction } from "./IProductTransaction";

export interface IProduct {
    _id?: string;
    name?: string;
    description?: string;
    price?: number;
    priceCost?: number;
    active?: boolean;
    quantity?: number;
    category?: ICategory;
    history?: IProductTransaction[];
    image?: string;
    createdAt?: Date;
    updatedAt?: Date;
    }