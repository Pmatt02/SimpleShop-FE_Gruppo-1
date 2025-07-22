import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CheckoutPage = () => {
  return (
    <>
      <div className="p-8 sm:flex sm:flex-col sm:items-center sm:h-screen sm:justify-center">
        <div className="sm:bg-gray-200 p-10 rounded-xl">
          <h1 className="text-center text-3xl font-bold">CHECKOUT</h1>
          <form className="flex flex-col mt-2 sm:w-xl">
            <h3 className="text-l font-bold place-self-start">
              Nome e Cognome
            </h3>
            <div className="sm:flex ">
              <Input className="sm:bg-gray-300" placeholder="Nome" />
              <Input className="sm:bg-gray-300 max-sm:mt-0.5" placeholder="Cognome" />
            </div>
            <h3 className="text-l font-bold place-self-start mt-4">Email</h3>
            <Input className="sm:bg-gray-300" placeholder="email@example.com" />
            <h3 className="text-l font-bold place-self-start mt-4">
              Indirizzo
            </h3>
            <Input className="sm:bg-gray-300" placeholder="Indirizzo" />
            <Button className="mt-4">Invia</Button>
          </form>
        </div>
      </div>
    </>
  );
};
