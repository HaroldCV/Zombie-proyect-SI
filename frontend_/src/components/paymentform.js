import React, { useState, useEffect } from "react";

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

    // Abrir el enlace de PayPal en una nueva ventana
    window.open(
      `https://www.paypal.com/cgi-bin/webscr?cmd=_view-a-trans&id=${data.id}`,
      "_blank"
    );
  };

  const executePayment = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentId = urlParams.get("paymentId");
    const payerId = urlParams.get("PayerID");

    if (paymentId && payerId) {
      // Realiza la solicitud GET a la ruta de ejecución de pago en tu backend
      const response = await fetch(
        `http://localhost:5000/execute_payment?paymentId=${paymentId}&PayerID=${payerId}`
      );
      const data = await response.json();

      // Verifica la respuesta del backend
      if (data.success) {
        // El pago se procesó y verificó correctamente
        // Aquí puedes mostrar un mensaje de éxito al usuario o realizar otras acciones necesarias
        console.log("Payment processed successfully");
      } else {
        // El pago no se pudo procesar o verificar
        // Aquí puedes mostrar un mensaje de error al usuario o realizar otras acciones necesarias
        console.error("Payment processing failed");
      }
    }
  };

  useEffect(() => {
    executePayment();
  }, []);

  return (
    <div className="container">
      <h1 className="mb-4">Payment Form</h1>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          className="form-control"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={createPayment}>
        Pay with PayPal
      </button>
      {paymentID && (
        <div className="mt-4">
          <h3>Payment ID: {paymentID}</h3>
          <p>Complete the purchase and continue using the dashboard</p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
