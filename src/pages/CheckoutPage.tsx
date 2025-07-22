import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/shemas/formSchema";
import type { FormSchema } from "@/types/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";

export const CheckoutPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
    },
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log("Dati inviati:", data);
  };

  return (
    <>
      <div className="p-8 sm:flex sm:flex-col sm:items-center sm:h-screen sm:justify-center">
        <div className="sm:bg-gray-200 p-10 rounded-xl">
          <h1 className="text-center text-3xl font-bold">CHECKOUT</h1>
          <form
            className="flex flex-col mt-2 sm:w-xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="text-l font-bold place-self-start">
              Nome e Cognome
            </h3>
            <div className="sm:flex ">
              <Input
                className="sm:bg-gray-300"
                placeholder="Nome"
                {...register("firstName")}
              />
              <Input
                className="sm:bg-gray-300 max-sm:mt-0.5"
                placeholder="Cognome"
                {...register("lastName")}
              />
            </div>
            <h3 className="text-l font-bold place-self-start mt-4">Email</h3>
            <Input
              className="sm:bg-gray-300"
              placeholder="email@example.com"
              {...register("email")}
            />
            <h3 className="text-l font-bold place-self-start mt-4">
              Indirizzo
            </h3>
            <Input
              className="sm:bg-gray-300"
              placeholder="Indirizzo"
              {...register("address")}
            />
            {errors.firstName && (
              <p className="text-red-500">• {errors.firstName.message}</p>
            )}
            {errors.lastName && (
              <p className="text-red-500">• {errors.lastName.message}</p>
            )}
            {errors.email && (
              <p className="text-red-500">• {errors.email.message}</p>
            )}
            {errors.address && (
              <p className="text-red-500">• {errors.address.message}</p>
            )}
            <Button className="mt-4">Invia ordine</Button>
          </form>
        </div>
      </div>
    </>
  );
};
