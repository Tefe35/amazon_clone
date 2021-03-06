import React from "react";
import "./Order.css";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";

function Order({ order }) {
  return (
    <div className="order">
      <p>
        <strong>Ordered at: </strong>
        {moment.unix(order.data.created).format("MMMM Do YYYY h:mma")}
      </p>

      <p className="order__id">
        <strong>Id: </strong>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <p>
            <strong>Order Total: </strong>
            <strong>{value}</strong>
          </p>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
