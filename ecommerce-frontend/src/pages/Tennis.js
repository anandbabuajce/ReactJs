import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const tennisProducts = [
  {
    id: 1,
    name: "Tennis Racquet",
    price: 2199,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQF4JTE3wPqcpKoxhhMfGUhx6UTrdkn4xJ1Uq5RyfxW30Lae-yR87EjSObYmpoZqeAL1wPB3dbgMJ-Q0ibY9zEoYCzpsA341VLBKNETj3s",
  },
  {
    id: 2,
    name: "Tennis Balls (Pack of 3)",
    price: 399,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6z9dPWnn8JB07cZvR6fqqZAny_w52FZxmzNRtKaftiyEAQf0nwAaFLkMaJOXHWRFPgC6l7u5WaWJ5LLHQphgLTv6bI-bbRmxdiOK07R-QKMENi1VhYCKp",
  },
  {
    id: 3,
    name: "Tennis Wristband",
    price: 199,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRFCJuXiRXkye-B2KJA9cZPjy8wbxKd0-Spt-DnnY6azTNSMxvy-4x4pBUZRZrRs_l0xKMLYjG_o8qaOb8--OQ5B7NSGgPR6hXhvE-7icyb7--_brftBaVT",
  },
];

export default function Tennis() {
  const { addToCart } = useCart();

  return (
    <>
      <Header />
      <NavBar />
      <section style={{ padding: "40px 0", background: "#f9f9f9", minHeight: "80vh" }}>
        <h1 style={{ textAlign: "center", marginBottom: 32, fontFamily: "cursive" }}>Tennis Products</h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "32px",
          maxWidth: 900,
          margin: "0 auto"
        }}>
          {tennisProducts.map((prod) => (
            <div
              key={prod.id}
              style={{
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                padding: "32px 16px",
                textAlign: "center",
                fontSize: "1.1rem",
              }}
            >
              <img src={prod.image} alt={prod.name} style={{ width: "100%", height: 160, objectFit: "contain", marginBottom: 16 }} />
              <div style={{ fontWeight: 600, marginBottom: 8, color: "#222" }}>{prod.name}</div>
              <div style={{ color: "#2e7d32", fontWeight: "bold", marginBottom: 12 }}>₹{prod.price}</div>
              <button
                onClick={() => {
                  addToCart(prod);
                  alert(`${prod.name} added to cart!`);
                }}
                style={{
                  padding: "8px 20px",
                  background: "#3b82f6",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "1rem"
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}