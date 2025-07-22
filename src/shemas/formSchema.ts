import z from "zod";

export const formSchema = z.object({
    firstName: z.string().min(2, 'Il nome deve avere almeno 2 caratteri'),
    lastName: z.string().min(2, 'Il congome deve avere almeno 2 caratteri'),
    email: z.email('Inserisci un indirizzo email valido'),
    address: z.string().min(6, "L'indirizzo inserito è troppo corto"),
});