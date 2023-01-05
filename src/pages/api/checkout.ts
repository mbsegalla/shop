import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { priceId } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!priceId) {
    return res.status(400).json({ message: "Price ID is required" });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ],
    success_url: successUrl,
    cancel_url: cancelUrl
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  });
}

export default handler;