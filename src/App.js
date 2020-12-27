import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Payment from "./Components/Payment";
import Login from "./Components/Login";
import { useStateValue } from "./Components/StateProvider";
import { auth } from "./firebase";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";

const promise = loadStripe(
  "pk_test_51I0aNcF1k6RhrQs6sDX9zGfRDKG12EiCPd7AHYpuyDNZGEr4tJoRmeVZBPxS7MANtfCOP2a4jEBhHrwmGZt8k7xP00pSUWxWed"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          //the user is logged in....
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out....
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="App" id="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
            <BackToTop />
            <Footer />
          </Route>

          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <BackToTop />
            <Footer />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Orders">
            <Orders />
            <BackToTop />
            <Footer />
          </Route>

          <Route path="/">
            <Home />
            <BackToTop />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
