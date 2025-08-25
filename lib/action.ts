'use server'

import { env } from "@/env"
import { redirect } from "next/navigation";
import { Stripe } from "stripe"

const stripeClient = new Stripe(env.NEXT_SECRET_STRIPE_KEY);

export async function subscribeTo(priceID: string) {
  const session = await stripeClient.checkout.sessions.create({
    mode: "subscription",
    line_items: [
        {
            price: priceID,
            quantity: 1,
        }
    ],
    success_url: `${env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${env.NEXT_PUBLIC_APP_URL}/canceled`,
  })

  redirect(session.url!);
}