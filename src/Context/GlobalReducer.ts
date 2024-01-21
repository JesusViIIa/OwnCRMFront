import { AppActions, GlobalState } from "../interfaces/IContext";

export default function AppReducer(state: GlobalState, action: AppActions): GlobalState {
  switch (action.type) {
  case "ADD_SALE":
    return {
      ...state,
      sales: [...state.sales, action.payload],
    };
  case "REMOVE_SALE":
    return {
      ...state,
      sales: state.sales.filter((sale) => sale._id !== action.payload),
    };
  case "UPDATE_SALE":
    return {
      ...state,
      sales: state.sales.map((sale) =>
        sale._id === action.payload._id ? action.payload : sale
      ),
    };

  case "SET_SALE":
    return {
      ...state,
      sales: action.payload,
    };
  case "ADD_PRODUCT":
    return {
      ...state,
      products: [...state.products, action.payload],
    };
  case "REMOVE_PRODUCT":
    return {
      ...state,
      products: state.products.filter(
        (product) => product._id !== action.payload
      ),
    };
  case "UPDATE_PRODUCT":
    return {
      ...state,
      products: state.products.map((product) =>
        product._id === action.payload._id ? action.payload : product
      ),
    };
  case "SET_PRODUCT":
    return {
      ...state,
      products: action.payload,
    };
    
  default:
    return state;
  }
 
  
}