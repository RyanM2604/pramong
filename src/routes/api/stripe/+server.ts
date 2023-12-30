import type { RequestHandler } from "@sveltejs/kit";
import Stripe from "stripe";

const SECRET_KEY = '';
const stripe = new Stripe(SECRET_KEY, {
    apiVersion: "2023-10-16"
})

export const POST: RequestHandler = async ({request}) => {
    const data = await request.json();
    const items = data.items;
    let lineItems : any = [];

    items.array.forEach(element => {
        lineItems.push({ price : element.id, quantity : element.quantity })
    });

    const session = await stripe.checkout.sessions.create({
        line_items : lineItems,
        success_url : "http://localhost:5173/success",
        cancel_url : "http://localhost:5173/cancel"
    });

    return new Response (
        JSON.stringify({ url : session.url }),
        {
            status : 200,
            headers : { 'content-type': 'application/json'}
        }
    )
}