import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Cart() {
  const { cart, setCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate total quantity and total price
  const totalQuantity = cart.length;
  const totalAmount = cart.reduce((sum, item) => sum + Number(item.price), 0);

  // Remove item by index
  const handleRemove = (idx) => {
    const newCart = [...cart];
    newCart.splice(idx, 1);
    setCart(newCart);
  };

  // Handle order placement
  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setCart([]);
    setShowCheckout(false);
    setPaymentMethod("");
    alert("Thank you! Your order has been placed successfully.");
  };

  return (
    <div className="cart" style={{ maxWidth: 600, margin: "40px auto", padding: 24 }}>
      <h1>CART</h1>
      {cart.length === 0 && !orderPlaced ? (
        <div style={{ color: "#888", margin: "32px 0" }}>Your cart is empty.</div>
      ) : null}

      {orderPlaced && (
        <div
          style={{
            background: "#e0ffe0",
            borderRadius: 12,
            padding: 24,
            marginBottom: 24,
            textAlign: "center",
            color: "#15803d",
            fontWeight: 600,
            fontSize: "1.1rem"
          }}
        >
          🎉 Thank you! Your order has been placed successfully.
        </div>
      )}

      {!showCheckout && cart.length > 0 && (
        <>
          {cart.map((item, idx) => (
            <div
              key={idx}
              className="cart-item"
              style={{
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                padding: 18,
                marginBottom: 18,
                display: "flex",
                alignItems: "center",
                gap: 18
              }}
            >
              <img
                src={item.image}
                alt={item.title || item.name}
                style={{ width: 80, height: 80, objectFit: "contain", borderRadius: 8, background: "#f9f9f9" }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>{item.title || item.name}</div>
                <div style={{ color: "#2e7d32", fontWeight: 500 }}>₹{item.price}</div>
              </div>
              <button
                onClick={() => handleRemove(idx)}
                style={{
                  background: "#ef4444",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  padding: "6px 14px",
                  fontWeight: 600,
                  cursor: "pointer"
                }}
              >
                remove
              </button>
            </div>
          ))}
          <button
            style={{
              padding: "12px 32px",
              background: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "1.1rem",
              cursor: "pointer",
              marginTop: 16
            }}
            onClick={() => setShowCheckout(true)}
          >
            CHECKOUT
          </button>
        </>
      )}

      {/* Checkout Page */}
      {showCheckout && (
        <div
          style={{
            marginTop: 32,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            padding: 28,
            textAlign: "center"
          }}
        >
          <h2 style={{ marginBottom: 18 }}>Checkout</h2>
          <div style={{ marginBottom: 10 }}>Total Items: <b>{totalQuantity}</b></div>
          <div style={{ marginBottom: 18, fontSize: "1.2rem", color: "#2e7d32" }}>
            Total Amount: <b>₹{totalAmount}</b>
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 500, marginRight: 10 }}>Select Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={e => setPaymentMethod(e.target.value)}
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem"
              }}
            >
              <option value="">--Choose--</option>
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="netbanking">Net Banking</option>
            </select>
          </div>
          {paymentMethod === "card" && (
            <div style={{ marginBottom: 18 }}>
              <input
                type="text"
                placeholder="Card Number"
                style={{
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  marginRight: 8
                }}
              />
              <input
                type="text"
                placeholder="Expiry"
                style={{
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  marginRight: 8
                }}
              />
              <input
                type="text"
                placeholder="CVV"
                style={{
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ccc"
                }}
              />
            </div>
          )}
          {paymentMethod === "upi" && (
            <div style={{ marginBottom: 18 }}>
              <input
                type="text"
                placeholder="Enter UPI ID"
                style={{
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ccc"
                }}
              />
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            <button
              style={{
                padding: "10px 28px",
                background: "#22c55e",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: paymentMethod ? "pointer" : "not-allowed",
                opacity: paymentMethod ? 1 : 0.6
              }}
              disabled={!paymentMethod}
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
            <button
              style={{
                padding: "10px 28px",
                background: "#f3f4f6",
                color: "#222",
                border: "none",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer"
              }}
              onClick={() => setShowCheckout(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}