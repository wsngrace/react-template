import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51Nxxxxxxxxxxxxxxxxxxxxxxxx"
);

/*

Test card number:
4242 4242 4242 4242
Any future date
Any CVC

United Kingdom (GB)	4000058260000005	Visa (debit)
United Kingdom (GB)	5555558265554449	Mastercard

*/