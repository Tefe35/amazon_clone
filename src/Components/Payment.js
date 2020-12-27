import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { db } from "../firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the special stripe secret which allows to charge the customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expects the total in a currencies sub-units
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);

  const handleSubmit = async (event) => {
    //fancy strip stuff
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    //Listen for change in the cardElement
    //Disply any error when customer type their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        {/* Delivery Address */}
        <div className="payment__rihgt">
          {user !== null && (
            <div className="payment__right__top">
              <div className="payment__right__title">
                <h3>Delivery Address:</h3>
              </div>

              <div className="payment__right__address">
                <p>
                  <strong>E-mail: </strong>
                  {user?.email}
                </p>
                <p>
                  <strong>Street: </strong>8136 Page Ave.
                </p>
                <p>
                  <strong>City: </strong>Saint Louis MO, USA
                </p>
              </div>
            </div>
          )}

          {/* Review Items left  */}
          <div className="payment__left">
            <div className="payment__left__title">
              <h3>
                Review Items and Delivery (
                <Link to="/checkout"> {basket?.length} items </Link>)
              </h3>
            </div>

            <div className="payment__items">
              {basket.map((item) => (
                <div className="payment__product">
                  <CheckoutProduct
                    index={0}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                </div>
              ))}

              {basket.length === 0 && (
                <div className="checkout__main">
                  <img
                    className="checkout__image"
                    src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                    alt="text"
                  />

                  <h3 className="checkout__emptyCart">
                    Your Amazon Cart is empty
                  </h3>
                  <small>Shop today's deals</small>
                </div>
              )}
            </div>
          </div>

          {/* payment method right bottom  */}
          <div className="payment__right__bottom">
            <div className="payment__right__title">
              <h3>Payment Method</h3>
            </div>

            <div className="payment__right__details">
              <form onSubmit={handleSubmit}>
                <div className="payment__right__details__priceContainer">
                  <CardElement
                    className="payment__card"
                    onChange={handleChange}
                  />
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Total: {value}</h3>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button
                    className="payment__button"
                    disabled={processing || disabled || succeeded}
                  >
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
