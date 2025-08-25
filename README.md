# FlowSync

FlowSync is a **demo app** built with **Next.js** and **Stripe** to learn how to
set up subscription payments.  
It’s not a real product — just a sandbox for experimenting with subscription
flows, Stripe Checkout, and webhook handling.

---

## 🚀 Features

- Next.js frontend + API routes (no backend server needed)
- Stripe Checkout integration
- Subscription tiers (configurable in Stripe Dashboard)
- Webhook handling for subscription lifecycle events
- Local development only (not deployed)

---

## 🛠️ Tech Stack

- **Framework:** Next.js (React)
- **Payments:** Stripe
- **Package Manager:** pnpm
- **Database:** None (left up to the user if needed)

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/lumix103/stripe-subscription-demo.git
cd stripe-subscription-demo
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```text
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_12345
NEXT_SECRET_STRIPE_KEY=sk_test_12345
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_STRIPE_WEBHOOK_KEY=whsec_12345
```

- `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` → Your Stripe publishable key  
- `NEXT_SECRET_STRIPE_KEY` → Your Stripe secret key  
- `NEXT_PUBLIC_APP_URL` → The base URL of your app (local dev: `http://localhost:3000`)  
- `NEXT_STRIPE_WEBHOOK_KEY` → Webhook signing secret from Stripe CLI  

### 4. Run the app

```bash
pnpm dev
```

The app should now be running at:  
👉 `http://localhost:3000`

---

## 🔄 Stripe Setup

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com/).
2. Create a **Product** and **Price** (subscription plan).
3. Copy the **Price ID** into your Next.js API route where you create the
   Checkout session.
4. Use the Stripe CLI to forward webhooks to your local app:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

---

## 📚 Learning Goals

This project is meant to help you:

- Learn how to integrate Stripe subscriptions into a Next.js app
- Practice using Next.js API routes for server-side Stripe logic
- Understand how to handle webhooks for subscription lifecycle events
- Build a foundation you can extend with a database later

---

## ⚠️ Disclaimer

FlowSync is a **demo project**.  
It does not provide real services, and no actual products are delivered.  
Use it only for **learning and testing**.

---

## 📝 License

MIT License