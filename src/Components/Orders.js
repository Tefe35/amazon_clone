import React, { useEffect, useState } from "react";
import "./Orders.css";
import Order from "./Order";
import { useStateValue } from "./StateProvider";
import { db } from "../firebase";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <div className="orders__container">
        <div className="orders__title">
          <h2>Your Orders</h2>
        </div>
        <div className="orders__order">
          {orders?.map((order) => (
            <Order order={order} />
          ))}

          {orders?.length === 0 && (
            <div className="checkout__main">
              <img
                className="checkout__image"
                src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                alt="text"
              />
              <h3 className="checkout__emptyCart">You have no orders</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;
