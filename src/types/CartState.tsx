import type { CartProduct, Product } from "./Product";

//definisce la struttura dello stato globale del carrello
export type InitialState = {
    cart: CartProduct[];
};

//azioni che si possono eseguire sul carrello
//payload rappresenta il dato da passare per eseguire l'azione. 
export type CartAction =
    | { type: "ADD_ITEM"; payload: CartProduct }
    | { type: "REMOVE_ITEM"; payload: number }
    | { type: "INCREMENT"; payload: number }
    | { type: "DECREMENT"; payload: number }
    | { type: "CLEAR_CART" };

