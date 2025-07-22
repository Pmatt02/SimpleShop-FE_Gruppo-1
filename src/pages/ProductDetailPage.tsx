import { Button } from "@/components/ui/button";
import { useProduct } from "@/hooks/useFetchData";

type ProductDetailProps = {
    id: number
}

export const ProductDetailPage = ({id}: ProductDetailProps) => {
  const {product} = useProduct(id);
  return (
    <>
      <div className="flex flex-col m-6 gap-3 items-center lg:flex-row lg:justify-center lg:h-screen lg:gap-6">
        <img
          src={product?.image}
          alt=""
          className="rounded-xl w-lg lg:w-md"
        />
        <div className="flex flex-col gap-2.5 min-[560px]:w-lg lg:w-md">
          <h1 className="text-4xl font-bold">{product?.title}</h1>
          <h2 className="text-2xl text-gray-500">{product?.category}</h2>
          <p className="text-base text-gray-800">{product?.description}</p>
          <h3 className="text-2xl font-semibold text-green-700">{product?.price}€</h3>
          <Button variant={"addToCart"} size={"lg"}>
            Aggiungi al carrello
          </Button>
        </div>
      </div>
    </>
  );
};
