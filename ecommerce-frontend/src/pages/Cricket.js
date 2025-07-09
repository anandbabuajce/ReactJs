import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const cricketProducts = [
  {
    id: 1,
    name: "English Willow Cricket Bat",
    price: 3499,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTk3PQ0vQxI5sUyj8PPLqar1PT9oXWqukUE-_FmKyYhd1djb-jyAsILDsa7F-0Mv7HYqHeaXuGCGyFgr0iKTdpwyFNTEAQu4AZBFoOEQkIwkrFbGkmNfL8N",
  },
  {
    id: 2,
    name: "Cricket Ball (Leather)",
    price: 499,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR78L0uqeAfKyIpBskE94Pw_b4piFokh9jC2blJhf2Ro0D-QZwGY0Myfk-RCim1yntMJhmycJrb_DOmr-kqOaE52E7lrCkSyqfS-BPbu0sxbLHwjVIudN_Cp0M",
  },
  {
    id: 3,
    name: "Cricket Gloves",
    price: 799,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTLGVQ-qazRx2z3GYZDSh8ENFU5x59hENWHrMyh3yqoJSlNFUqrxFbywQ1uIZxMlku7v1pqxU9m5qz3WvpBsc5oMycMght7GSex6NejMZ9fpQx45k_G3ibx",
  },
];

export default function Cricket() {
  const { addToCart } = useCart();

  return (
    <>
      <Header />
      <NavBar />
      <section style={{ padding: "40px 0", background: "#f9f9f9", minHeight: "80vh" }}>
        <h1 style={{ textAlign: "center", marginBottom: 32, fontFamily: "cursive" }}>Cricket Products</h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "32px",
          maxWidth: 900,
          margin: "0 auto"
        }}>
          {cricketProducts.map((prod) => (
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
              <div style={{ fontWeight: 600, marginBottom: 8, color: "#222"}}>{prod.name}</div>
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