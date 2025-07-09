import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const fitnessProducts = [
  {
    id: 1,
    name: "Dumbbell Set",
    price: 1599,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT1V_O4fJzphvHBGsEiPfrUWqkgouFno-QM9S2cweXLibTKoC0kXY679PQyk2mGaWT1YlrBufbDp1UJPBhZwMV9EgiJphpAabjz2qk6bMCUGBKFx3oNUW2aBw",
  },
  {
    id: 2,
    name: "Yoga Mat",
    price: 499,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrHSRrck8a62pYe3PXka0NBPx73c3AnyveQfx-5NsbWAxI5_udPvm--jdwTPqgP0r5Jf6keD6SB87AbQ8cp9XY9M2cc5RSuHWb7pCRFq-gKoDjYgGPMVyKmT0",
  },
  {
    id: 3,
    name: "Resistance Bands",
    price: 299,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQAiItC310H-sxPPNIpJQYSWrGtCfnvWaZwdScUV8B7uEbmdmuoiC9E1bioZqAi4pXdUztzt7HL77cqxZ8deolKHIDo7QWVAEZdtkkpRQPJ_4XL_G4_Ujwb",
  },
];

export default function FitnessTraining() {
  const { addToCart } = useCart();

  return (
    <>
      <Header />
      <NavBar />
      <section style={{ padding: "40px 0", background: "#f9f9f9", minHeight: "80vh" }}>
        <h1 style={{ textAlign: "center", marginBottom: 32, fontFamily: "cursive" }}>Fitness & Training Products</h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "32px",
          maxWidth: 900,
          margin: "0 auto"
        }}>
          {fitnessProducts.map((prod) => (
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