import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();
  return (
    <header className="header">
      <Link to="/" className="logo">VOXX-HELEXIA</Link>
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <Link to="/cart" className="relative" style={{ position: "relative", fontSize: "1.5rem" }}>
          🛒
          {cart.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-12px",
                background: "#3b82f6",
                color: "#fff",
                borderRadius: "50%",
                padding: "2px 8px",
                fontSize: "0.9rem",
                fontWeight: "bold",
                minWidth: "22px",
                textAlign: "center"
              }}
            >
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}