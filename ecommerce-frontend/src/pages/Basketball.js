import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const basketballProducts = [
  {
    id: 1,
    name: "Spalding NBA Basketball",
    price: 1599,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQu9lb0Xtrm464Ag1ycK0ddTEumu-AdcV4kX8ls7m3ez9wDxEQItQEtZtSSqgcaKzIHBw25QJpU-t3zkThKzFzlUBVT-Sczx8UGXO0vTMT7370DnAqb7hOxBnI",
  },
  {
    id: 2,
    name: "Basketball Jersey",
    price: 899,
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d9aa1b6a-4385-4233-96b6-b03f5c83d1a6/LAL+MNK+DF+SWGMN+JSY+ICN+22.png",
  },
  {
    id: 3,
    name: "Basketball Shoes",
    price: 2999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPS0wLD__sTLZOZYxx19zJQxwR2MOyabWJizaQ4NW53hqAOFi-TEMsjpr2ekPxCTob10G1_vb9tmSao1DTdA7i6XuQqu-bOOgUHQJVFkxJ8cdu7BFHZ2isZAI",
  },
];

export default function Basketball({ search = "" }) {
  const { addToCart } = useCart();

  const filteredProducts = basketballProducts.filter(prod =>
    prod.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <section style={{ padding: "40px 0", background: "#f9f9f9", minHeight: "80vh" }}>
        <h1 style={{ textAlign: "center", marginBottom: 32, fontFamily: "cursive" }}>Basketball Products</h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "32px",
          maxWidth: 900,
          margin: "0 auto"
        }}>
          {filteredProducts.length === 0 ? (
            <div style={{ gridColumn: "1/-1", textAlign: "center", color: "#888" }}>No products found.</div>
          ) : (
            filteredProducts.map((prod) => (
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
            ))
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}