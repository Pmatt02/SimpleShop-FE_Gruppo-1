import React, { useState } from "react";
import type { Product, CartProduct } from "../types/Product";
import { useCart } from "@/hooks/useCart";
import { Card, CardContent } from "@/components/ui/cartCard";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash2, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

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

    const ClearCart = () => {
        dispatch({
            type: "CLEAR_CART"
        });
    }


    const totalPrice = state.cart.reduce(
        (acc, item) => acc + (item.product?.price ?? 0) * item.quantity,
        0
    );

    return (
        <div className="p-4 sm:p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                Il tuo Carrello
            </h1>

            {state.cart.length > 0 && (
                <div className="flex justify-end mt-2 mr-4">
                    <Button
                        variant="link"
                        onClick={ClearCart}
                        className="text-gray-500 hover:no-underline hover:to-blue-400 p-0 h-auto text-sm sm:text-base"
                    >
                        Svuota carrello
                    </Button>
                </div >
            )}

            {
                state.cart.length === 0 ? (
                    <p className="text-center text-gray-500">Non c'è niente qui!</p>
                ) : (
                    <div className="bg-blue-100 rounded-2xl shadow-lg p-6 space-y-4">
                        {state.cart.map((item) => (
                            <Card key={item.product?.id} className="shadow-md">
                                <CardContent className="flex items-center justify-between gap-4 p-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.product?.image}
                                            alt={item.product?.title}
                                            className="w-20 h-20 object-cover rounded sm:w-24 sm:h-24"
                                        />
                                        <div>
                                            <h2 className="font-semibold">{item.product?.title}</h2>
                                            <p className="text-sm text-gray-500">
                                                Prezzo: €{item.product?.price.toFixed(2)}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Subtotale: €
                                                {((item.product?.price ?? 0) * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>

                                    {/*Bottoni per increment, decrement e rimuovi */}
                                    <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap justify-end">
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            onClick={() => handleDecrement(item.product?.id ?? 0)}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </Button>

                                        <span className="px-2">{item.quantity}</span>
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            onClick={() => handleIncrement(item.product?.id ?? 0)}
                                        >
                                            <Plus className="w-4 h-4" />
                                        </Button>

                                        <Button
                                            size="icon"
                                            variant="destructive"
                                            onClick={() => handleRemove(item.product?.id ?? 0)}
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
                )
            }

            {/*Bottone checkout*/}
            {
                state.cart.length > 0 && (
                    <div className="text-right mt-6">
                        <Link to={'/checkout'}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto bg-green-600 text-white text-lg hover:bg-green-700"
                            >
                                <ShoppingCart /> Vai al checkout
                            </Button>
                        </Link>
                    </div>
                )
            }
        </div >
    );
};

export default CartPage;
