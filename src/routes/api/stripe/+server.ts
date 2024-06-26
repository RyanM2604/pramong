import type { RequestHandler } from "@sveltejs/kit";
import Stripe from "stripe";

const SECRET_API_KEY = process.env.SECRET_API_KEY

const stripe = new Stripe(SECRET_API_KEY, {
    apiVersion: "2023-10-16",
    typescript: true
})

export const POST: RequestHandler = async ({request}) => {
    const data = await request.json();
    const items = data.items;
    console.log(items)

    let lineItems : any = [];
    items.forEach((item: any) => {
        lineItems.push( { price: item.id, quantity: item.quantity } )
    });

    console.log(lineItems)

    // It gives us a URL for the person to check out with
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "https://pramong-six.vercel.app/success",
        cancel_url: "https://pramong-six.vercel.app/cancel",
    });

    return new Response(
        JSON.stringify({ url: session.url }), // frontend will get this url to redirect
        {
            status: 200,
            headers: { 'content-type': 'application/json'}
        }
    )
}