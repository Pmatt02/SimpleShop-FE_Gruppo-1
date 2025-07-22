export type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
        count: number;
        rate: number;
    };
    title: string;
}


export type CartProduct = {
    product: Product,
    quantity: number
}