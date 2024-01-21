import React, { createContext, useReducer } from "react";
import GlobalReducer from './GlobalReducer';
import { AppActions, GlobalState } from "../interfaces/IContext";

// Definimos el estado inicial. Aquí puedes agregar más cosas a medida que tu aplicación crezca
const initialState = {
  products: [],
  categories: [],
  transactions: [],
  customers: [],
  sales: [],
  accounts: [],
};

// Creamos el contexto
export const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<AppActions>;
}>({ state: initialState, dispatch: () => null });

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<(state: GlobalState, action: AppActions) => GlobalState>(GlobalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};