import React, { useState } from "react";
import type { Product, CartProduct } from "../types/Product";
import { useCart } from "@/context/CartContext";
import { Card, CardContent } from "@/components/ui/cartCard";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash2, ShoppingCart } from "lucide-react"

const CartPage: React.FC = () => {


    //gestione azioni nel carrello
    const { state, dispatch } = useCart();

    const handleIncrement = (id: number) => {
        dispatch({ type: "INCREMENT", payload: id });
    };

    const handleDecrement = (id: number) => {
        dispatch({ type: "DECREMENT", payload: id });
    };

    const handleRemove = (id: number) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };

    //prova test
    const handleAddTestProduct = () => {
        const testProduct: Product = {
            id: Math.floor(Math.random() * 1000), // ID unico simulato
            title: "Prodotto Finto",
            price: Math.random() * 100,
            description: "Un prodotto di test per simulare l'aggiunta",
            category: "fake",
            image: "https://via.placeholder.com/150",
        };

        dispatch({
            type: "ADD_ITEM",
            payload: {
                product: testProduct,
                quantity: 1
            }
        });
    };

    const totalPrice = state.cart.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
    );

    return (
        <div className="p-4 sm:p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Il tuo Carrello</h1>

            {/*bottone test aggiungi prodotto*/}
            <div className="text-center mb-4">
                <Button variant="default" onClick={handleAddTestProduct}>
                    ➕ Aggiungi prodotto finto
                </Button>
            </div>
            {/*fine bottone test*/}

            {state.cart.length === 0 ? (
                <p className="text-center text-gray-500">Non c'è niente qui!</p>
            ) : (
                <div className="bg-blue-100 rounded-2xl shadow-lg p-6 space-y-4">
                    {state.cart.map((item) => (
                        <Card key={item.product.id} className="shadow-md">
                            <CardContent className="flex items-center justify-between gap-4 p-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.product.image}
                                        alt={item.product.title}
                                        className="w-20 h-20 object-cover rounded sm:w-24 sm:h-24"
                                    />
                                    <div>
                                        <h2 className="font-semibold">{item.product.title}</h2>
                                        <p className="text-sm text-gray-500">
                                            Prezzo: €{item.product.price.toFixed(2)}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Subtotale: €{(item.product.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>

                                {/*Bottoni per increment, decrement e rimuovi */}
                                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap justify-end">
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        onClick={() => handleDecrement(item.product.id)}
                                    ><Minus className="px-2" />
                                    </Button>

                                    <span className="px-2">{item.quantity}</span>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        onClick={() => handleIncrement(item.product.id)}
                                    >
                                        <Plus className="2-4 h-4" />
                                    </Button>

                                    <Button
                                        size="icon"
                                        variant="destructive"
                                        onClick={() => handleRemove(item.product.id)}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    {/*totale carrello */}
                    <div className="text-right mt-6 sm:text-right text-center">
                        <p className="text-lg font-bold">
                            Totale: €{totalPrice.toFixed(2)}
                        </p>

                    </div>
                </div>

            )}

            {/*Bottone checkout*/}
            {state.cart.length > 0 && (
                <div className="text-right mt-6">
                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto bg-green-600 text-white text-lg hover:bg-green-700"
                    >
                        <ShoppingCart /> Vai al checkout</Button>
                </div>
            )}

        </div>
    );


}

export default CartPage;