export type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    title: string;
}


export type CartProduct = {
    product: Product,
    quantity: number
}