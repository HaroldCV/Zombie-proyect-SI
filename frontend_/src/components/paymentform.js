import React, { useState } from "react";

const PaymentForm = ({ handlePayment }) => {
  const [amount, setAmount] = useState(0);
  const [paymentID, setPaymentID] = useState(null);

  const createPayment = async () => {
    // Enviar el monto del pago al backend
    const response = await fetch("http://localhost:5000/create_payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount })
    });

    const data = await response.json();
    setPaymentID(data.id);

    // Redirigir al usuario a la página de PayPal después de la compra
    window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_view-a-trans&id=${data.id}`;
  };

  return (
    <div>
      <h1>Payment Form</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={createPayment}>Pay with PayPal</button>
      {paymentID && (
        <div>
          <h3>Payment ID: {paymentID}</h3>
          <p>Complete the purchase and redirect to PayPal</p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
