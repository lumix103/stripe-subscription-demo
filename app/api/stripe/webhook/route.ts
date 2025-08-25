import { env } from "@/env";
import { NextResponse } from "next/server";
import { Stripe } from "stripe";

export const dynamic = 'force-dynamic';

const stripeClient = new Stripe(env.NEXT_SECRET_STRIPE_KEY);

export async function POST(req: Request) {
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
        return new NextResponse("Missing Stripe-Signature header", {status: 400})
    }
    let event : Stripe.Event;
    try {
        const buf = await req.arrayBuffer();
        const rawBody = Buffer.from(buf).toString("utf8");
        event = stripeClient.webhooks.constructEvent(rawBody, signature, env.NEXT_STRIPE_WEBHOOK_KEY);
    } catch {
        return new NextResponse(`Webhook signature verification failed.`, {status: 400})
    }

    try {
        switch (event.type) {
            case "checkout.session.completed": {
                const session = event.data.object as Stripe.Checkout.Session;
                console.log(session)
                break;
            }
            default: {
                console.log("Unhandled event: ", event.type)
            }
        }
        return new Response(null, {status: 200});
    } catch {
        return new NextResponse(`Webhook handler error.`, {status: 500})
    }
}