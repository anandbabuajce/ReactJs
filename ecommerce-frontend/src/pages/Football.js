import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const footballProducts = [
  {
    id: 1,
    name: "Professional Football",
    price: 1499,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS2MLhQ80KMTmDuHu3cNsr-dMImIQl0zHk-VdIToSYtdrvbpmIjxOk79zsjng3UM1VqnwqnLytK7gSH5IBS05qGjD4ANKIiA_JTgTu3Kj_ciaKRSdsYjp12",
  },
  {
    id: 2,
    name: "Football Shoes",
    price: 2499,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRzfN0sIfBbaBw_EzKNy2hGIcmBHlPa5hCpv4srgjSWpn8RBlO5kkdS9zRwjW3JsUJ2Ebp00WSx1QADpLVOQD5heYPX7NR4dy6FjEtmFAmUbz_ktgCENFjy",
  },
  {
    id: 3,
    name: "Goalkeeper Gloves",
    price: 999,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSUxxApT8HfLQ-FK4wlk9iAAtZ90EgkH-uM-eJP0Pnv68xf-gz78YT9J2JdJo1WdZAPit7CH6tLMeAWWJAN39yqHuyStNX6zieDrywjJTYifmalBCMw-KYISA",
  },
];

export default function Football() {
  const { addToCart } = useCart();

  return (
    <>
      <Header />
      <NavBar />
      <section style={{ padding: "40px 0", background: "#f9f9f9", minHeight: "80vh" }}>
        <h1 style={{ textAlign: "center", marginBottom: 32, fontFamily: "cursive" }}>Football Products</h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "32px",
          maxWidth: 900,
          margin: "0 auto"
        }}>
          {footballProducts.map((prod) => (
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