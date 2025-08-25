import { z } from "zod";

const envSchema = z.object({
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: z.string().min(1, "Stripe public key is required"),
    NEXT_SECRET_STRIPE_KEY: z.string().min(1, "Stripe secret key is required"),
    NEXT_PUBLIC_APP_URL: z.string().min(1, "Public app URL is required.")
});

export const env = envSchema.parse(process.env);