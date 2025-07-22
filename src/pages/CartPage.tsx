import React, { useState } from "react";
import type { Product } from "../types/Product";

const CartPage: React.FC = () => {

    const Cart: Product[] = [{
        id: 0,
        title: "Test",
        price: 0,
        description: "",
        category: "",
        image: "",
        quantity: 1
    }, {
        id: 1,
        title: "Test1",
        price: 0,
        description: "",
        category: "",
        image: "",
        quantity: 3
    },];

    /*const [qty, setQty] = useState(Cart.map(element => element.quantity));

    function updateQty(i: number) {
        Cart[i].quantity++;
        setQty(Cart.map(element => element.quantity));
    }*/

    return (
        <div>
            <h1>Carrello</h1>
            <ul>

            </ul>
        </div>
    )

}

export default CartPage;