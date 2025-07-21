import api from "@/services/api";
import type { Product } from "@/types/Product";
import { useEffect, useState } from "react";


export const ProductList = () => {
    const [data, setData] = useState<Product[] | null>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await api.get('/products', {
                    signal: controller.signal,
                });
                if (response.status != 200){
                    throw new Error(`Errore HTTP: ${response.status}`);
                }
                const products = response.data;
                console.log('risposta: ', products);
                setData(products);
            } catch (err){
                if (err instanceof DOMException && err.name === 'AbortError'){
                    console.log('Fetch annullata.');
                }
                if (err instanceof Error){
                    setError(err.message);
                } else{
                    setError('Si è verificato un errore sconosciuto');
                }
            } finally{
                setIsLoading(false);
            }
        }

        fetchData();
        return () => {
            controller.abort();
        }
    }, []);

    if (isLoading) {
        return <div>Caricamento dati...</div>
    }

    if (error) {
        return <div style={{color: 'red'}}>Errore: {error}</div>;
    }

    if (!data){
        return <div>Nessun dato disponibile.</div>;
    }

    return (
        <div>Dati ricevuti</div>
    );
};