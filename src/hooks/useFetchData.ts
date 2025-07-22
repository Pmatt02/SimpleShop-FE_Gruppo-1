import api from "@/services/api";
import useSWR from "swr";
import type {Product} from '@/types/Product';

interface ApiResponseArray<T>{
    data: T[];
}
interface ApiResponse<T>{
    data: T;
}

export const useProducts = () => {
    const {data, error} = useSWR<ApiResponseArray<Product>>('/products', api.get);
    return {
        products: data?.data || [],
        isLoading: !error && !data,
        isError: error,
    }
}

export const useCategories = () => {
    const {data, error} = useSWR<ApiResponseArray<string>>('/products/categories', api.get);
    return {
        categories: data?.data || [],
        isLoading: !error && !data,
        isError: error,
    }
}

export const useProductsByCategory = (category: string) => {
    const {data, error} = useSWR<ApiResponseArray<Product>>(`/products/category/${category}`, api.get);
    return {
        products: data?.data || [],
        isLoading: !error && !data,
        isError: error,
    }
}

export const useProduct = (id: number) => {
    const {data, error} = useSWR<ApiResponse<Product>>(`/products/${id}`, api.get);
    return {
        product: data?.data || null,
        isLoading: !error && !data,
        isError: error,
    }
}