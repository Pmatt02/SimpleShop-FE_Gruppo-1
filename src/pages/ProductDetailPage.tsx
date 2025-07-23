import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useProduct } from "@/hooks/useFetchData";
import type { Product } from "@/types/Product";
import { useParams } from "react-router-dom";

export const ProductDetailPage = () => {
  const { id } = useParams();
  const { product } = useProduct(Number(id));
  const { dispatch } = useCart();
  const addToCart = (product: Product | null) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        product: product,
        quantity: 1,
      },
    });
  };
  return (
    <>
      <div className="flex flex-col m-6 gap-3 items-center lg:flex-row lg:justify-center lg:gap-6 min-[560px]:mt-20">
        <img
          src={product?.image}
          alt=""
          className="rounded-xl lg:w-md"
          width={"200px"}
        />
        <div className="flex flex-col gap-2.5 w-2xs min-[560px]:w-lg lg:w-md">
          <h1 className="text-2xl lg:text-4xl font-bold">{product?.title}</h1>
          <h2 className="text-xl lg:text-2xl text-gray-500">
            {product?.category}
          </h2>
          <p className="text-sm lg:text-base text-gray-800">
            {product?.description}
          </p>
          <h3 className="text-2xl font-semibold text-green-700">
            {product?.price}€
          </h3>
          <Button variant={"addToCart"} size={"lg"} onClick={() => addToCart(product)}>
            Aggiungi al carrello
          </Button>
        </div>
      </div>
    </>
  );
};
