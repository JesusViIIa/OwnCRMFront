import { IAccount } from "./IAccount";
import { ICategory } from "./ICategory";
import { ICustomer } from "./ICustomer";
import { IProduct } from "./IProduct";
import { ISale } from "./ISale";
import { ITransaction } from "./ITransaction";

//Sale Actions
interface IAddSale {
    type: 'ADD_SALE';
    payload: ISale;
}

interface IRemoveSale {
    type: 'REMOVE_SALE';
    payload: string;
}

interface IUpdateSale {
    type: 'UPDATE_SALE';
    payload: ISale;
}
interface ISetSale {
    type: 'SET_SALE';
    payload: ISale[];
}

// product actions
interface IAddProduct {
    type: 'ADD_PRODUCT';
    payload: IProduct;
}

interface IRemoveProduct {
    type: 'REMOVE_PRODUCT';
    payload: string;
}

interface IUpdateProduct {
    type: 'UPDATE_PRODUCT';
    payload: IProduct;
}
interface ISetProduct {
    type: 'SET_PRODUCT';
    payload: IProduct[];
}







export type SaleActions = IAddSale | IRemoveSale | IUpdateSale | ISetSale;
export type ProductActions = IAddProduct | IRemoveProduct | IUpdateProduct | ISetProduct;

export type AppActions = SaleActions | ProductActions;



export type GlobalState = {
    products: IProduct[];
categories: ICategory[];
transactions: ITransaction[];
customers: ICustomer[];
sales: ISale[];
accounts: IAccount[];
};