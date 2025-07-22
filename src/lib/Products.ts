import prodotto1 from "@/assets/prodotto1.jpg";
import prodotto2 from "@/assets/prodotto2.jpg";
import prodotto3 from "@/assets/prodotto3.jpg";


export const products = [
    {
        id: 1,
        name: "Ciabatte da mare",
        description: "Ideali per l'estate.",
        price: 19.99, // ✅ come numero
        category: "calzature",
        image: prodotto1,
    },
    {
        id: 2,
        name: "Spumante 50 anni",
        description: "Perfetto per i festeggiamenti.",
        price: 29.99,
        category: "bevande",
        image: prodotto2,
    },
    {
        id: 3,
        name: "Zaino da viaggio",
        description: "Capiente e resistente.",
        price: 39.99,
        category: "accessori",
        image: prodotto3,
    },
];
