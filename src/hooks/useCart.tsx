import { CartContext } from "@/context/CartContext";
import { useContext } from "react";


//hook custom per usare il carrello facilmente
export const useCart = () => {
    const context = useContext(CartContext); //con questo ottengo lo stato e il dispatcher dal provider
    //errore se se proviamo ad usarlo fuori dal provider
    if (!context) {
        throw new Error("useCart deve essere usato dentro CartProvider");
    }
    return context;
};