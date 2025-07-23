import { useState } from "react";
import { useCategories, useProducts, useProductsByCategory } from "./useFetchData";

export const useFilter = () => {
    const { categories, isLoading: loadingCategories, isError: errorCategories } = useCategories();
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    // Caricamento tutti i prodotti
    const {
        products: allProducts,
        isLoading: loadingAll,
        isError: errorAll,
    } = useProducts();

    // Caricamento prodotti filtrati per categoria
    const {
        products: filteredProducts,
        isLoading: loadingFiltered,
        isError: errorFiltered,
    } = useProductsByCategory(selectedCategory);

    // Quali prodotti mostrare
    const productsToShow = selectedCategory ? filteredProducts : allProducts;
    const isLoading = loadingCategories || (selectedCategory ? loadingFiltered : loadingAll);
    const isError = errorCategories || (selectedCategory ? errorFiltered : errorAll);

    return {
        categories,
        selectedCategory,
        setSelectedCategory,
        products: productsToShow,
        isLoading,
        isError,
    };
};
