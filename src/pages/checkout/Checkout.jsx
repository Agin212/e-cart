import React from "react";
import "./Checkout.css";
import { useState } from "react";

const Checkout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, such as submit it to a server
  };

  return (
    <div>
      <div className="checkout-page">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-class">
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="input-class">
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="input-class">
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input-class">
            Address:
            <input
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className="input-class">
            City:
            <input
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div className="input-class">
            State:
            <input
              type="text"
              value={state}
              onChange={(event) => setState(event.target.value)}
            />
          </div>
          <div className="input-class">
            Zip Code:
            <input
              type="text"
              value={zipCode}
              onChange={(event) => setZipCode(event.target.value)}
            />
          </div>
          <div className="input-class">
            Payment Method:
            <select
              value={paymentMethod}
              onChange={(event) => setPaymentMethod(event.target.value)}
            >
              <option value="">--Please choose an option--</option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bitcoin">Bitcoin</option>
            </select>
          </div>
          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
