import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const shoesProducts = [
  {
    id: 1,
    name: "Nike Air Zoom Pegasus",
    price: 4999,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcScgFpbKgBOHHm8aRPoscX4V58a1q_i3IrV5w2cOM5KQ9CxgQIm0ubGGy4PPUN6rR1Xus2ApqcfWJgmoLMmynDoP-NfgsoYRreX0iHQDDDsmSjOI9aWn9x8fig",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 7999,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbgZdAkKqUcJaOPR-pZCu8XLI8G4lHwp1BxV3-hxeuQWPoDPPPy0ZEkekCNO8nql49Ca-feZCC9YvKfy1dJ9Htgg3z3xMYWaD5LK3vGataRk7QAm0euS2AmQ",
  },
  {
    id: 3,
    name: "Puma Running Shoes",
    price: 3499,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTrZ9XNQyESXXFUU6dcCemdsEZ6Y35jnWmEhH2xtsjbBZNqmbr4fi0doiQMrjbFSir6oDXubOBQDCUHWDe28Vp8iWBOLkFyaoGv147FdmaLcTrxpl0NSfWvZIo",
  },
];

export default function RunningShoes() {
  const { addToCart } = useCart();

  return (
    <>
      <Header />
      <NavBar />
      <section style={{ padding: "40px 0", background: "#f9f9f9", minHeight: "80vh" }}>
        <h1 style={{ textAlign: "center", marginBottom: 32, fontFamily: "cursive" }}>Running Shoes</h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "32px",
          maxWidth: 900,
          margin: "0 auto"
        }}>
          {shoesProducts.map((prod) => (
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