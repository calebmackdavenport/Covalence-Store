import * as Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export function charge(token: string, amt: number) {
    return stripe.charges.create({
        amount: amt * 100, //specifically amt is the amount in cents. 0.45 cents becomes amount:45
        currency: 'usd',
        source: token,
        description: 'MyBlog: Donation'
    });
    //returning a promise so when we call .charge, we can use .then(...)
}