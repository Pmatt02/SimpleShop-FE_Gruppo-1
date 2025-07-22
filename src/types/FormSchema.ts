import type { formSchema } from "@/shemas/formSchema";
import type z from "zod";

export type FormSchema = z.infer<typeof formSchema>;