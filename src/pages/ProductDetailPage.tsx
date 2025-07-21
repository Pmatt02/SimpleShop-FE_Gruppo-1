import { Button } from "@/components/ui/button";

export const ProductDetailPage = () => {
  return (
    <>
      <div className="flex flex-col m-6 gap-3 items-center lg:flex-row lg:justify-center lg:h-screen lg:gap-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"
          alt=""
          className="rounded-xl w-lg lg:w-md"
        />
        <div className="flex flex-col gap-2.5 min-[560px]:w-lg lg:w-md">
          <h1 className="text-4xl font-bold">Titolo</h1>
          <h2 className="text-2xl text-gray-500">Categoria</h2>
          <p className="text-base text-gray-800">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            reiciendis laborum dicta consequatur, distinctio voluptatem quos
            voluptates ratione voluptatibus corrupti? Odit assumenda sed
            voluptatibus voluptatem commodi aperiam ullam at illo.
          </p>
          <h3 className="text-2xl font-semibold text-green-700">99.99€</h3>
          <Button variant={"addToCart"} size={"lg"}>
            Aggiungi al carrello
          </Button>
        </div>
      </div>
    </>
  );
};

// lg:flex-row lg:justify-center lg:items-center lg:h-screen lg:gap-6