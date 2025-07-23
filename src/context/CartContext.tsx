import type { CartProduct } from "@/types/Product";
import type { CartAction, InitialState } from "@/types/CartState";
import { createContext, useContext, useReducer, type ReactNode } from "react";

const initialState: InitialState = {
    cart: []
}


//creo il context del carrello
export const CartContext = createContext<{
    state: InitialState;
    dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);


//Reducer: creo una funzione che riceve stato iniziale e un'azione e restituisce lo stato aggiornato.
const CartReducer = (state: InitialState, action: CartAction): InitialState => {
    switch (action.type) {

        case "ADD_ITEM": {
            const exists = state.cart.find(item => item.product?.id === action.payload.product?.id);
            if (exists) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.product?.id === action.payload.product?.id
                            ? { ...item, quantity: item.quantity + action.payload.quantity }
                            : item
                    ),
                };
            }
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        }

        case "REMOVE_ITEM": {
            return {
                ...state,
                cart: state.cart.filter(item => item.product?.id !== action.payload), //qui payload è l'id del prodotto da eliminare
            };
        }

        case "INCREMENT": {
            return {
                ...state,
                cart: state.cart.map(item =>  //map per scorrere i prodotti, se ne trova uno con id uguale crea una copia e aggiunge 1 alla quantità
                    item.product?.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        }

        case "DECREMENT": {
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.product?.id === action.payload && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };
        }

        case "CLEAR_CART": {
            return {
                ...state,
                cart: [],
            };
        }

        default:
            return state;
    }
};

// Provider, contenitore globale del carrello
export const CartProvider = ({ children }: { children: ReactNode }) => {
    //inizializzo lo stato, cartReducer invece gestisce le azioni svolte sul carrello
    const [state, dispatch] = useReducer(CartReducer, initialState);
    return (
        //rende disponibili lo stato attuale e la funzione per modificarlo
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
        //componenti React annidati (children) dentro cartProvider che erediteranno questo stato
    );
};