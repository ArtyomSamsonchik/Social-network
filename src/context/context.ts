import {createContext} from "react";
import store from "../redux/redux-store";

export const GlobalStoreStateContext = createContext(store.getState())
export const GlobalStoreDispatchContext = createContext(store.dispatch)