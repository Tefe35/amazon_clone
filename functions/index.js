const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I0aNcF1k6RhrQs6RdSqbBtWKVASHQlF5ktszsP0UAwCr3BFl2ryQ4cFpUuPiAqGKkwNmupqA1svgH4yCDbA2tLn008axtw6HX"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) =>
  response.status(200).send("Hello Developers")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-73e04/us-central1/api
