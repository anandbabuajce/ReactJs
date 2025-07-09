import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

// Inline CSS for the product details page
const styles = {
  pageBg: {
    minHeight: "70vh",
    background: "#f9fafb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 0"
  },
  card: {
    background: "#fff",
    boxShadow: "0 4px 24px rgba(0,0,0,0.09)",
    borderRadius: "1rem",
    padding: "2rem",
    maxWidth: 400,
    width: "100%",
    textAlign: "center",
    transition: "transform 0.2s, box-shadow 0.2s"
  },
  image: {
    width: "16rem",
    height: "16rem",
    objectFit: "contain",
    marginBottom: "1.5rem",
    borderRadius: "0.5rem",
    border: "1px solid #eee",
    background: "#f9f9f9"
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "0.5rem"
  },
  desc: {
    color: "#444",
    marginBottom: "1rem"
  },
  price: {
    color: "#2e7d32",
    fontWeight: 700,
    fontSize: "1.3rem",
    marginBottom: "1.5rem"
  },
  button: {
    padding: "10px 32px",
    background: "linear-gradient(90deg, #fb923c 60%, #f97316 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "999px",
    fontWeight: 600,
    fontSize: "1.1rem",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(251,146,60,0.10)",
    transition: "transform 0.15s, box-shadow 0.15s"
  }
};

// Dummy products matching ProductList.js
const dummyProducts = [
  {
    id: "1",
    title: "Professional Football",
    price: 1499,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRjWv3ndTIa_cBa_0mPewoyQIbwqCqvuPmcgbIAQlUN_0oqM3x28H9ciYGTOh-DoBCXgzf-IABeLDnz9WjuQhgD_6PsanL5Fp9EURE7QmqqUR6NNIyToWDxvA",
    description: "Premium quality football suitable for all-weather matches."
  },
  {
    id: "2",
    title: "Basketball Pro",
    price: 1299,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQu9lb0Xtrm464Ag1ycK0ddTEumu-AdcV4kX8ls7m3ez9wDxEQItQEtZtSSqgcaKzIHBw25QJpU-t3zkThKzFzlUBVT-Sczx8UGXO0vTMT7370DnAqb7hOxBnI",
    description: "Professional-grade basketball for tournaments and practice."
  },
  {
    id: "3",
    title: "Tennis Racquet",
    price: 2199,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTJoqlkVxEr_cFklLpi7wgmOfMzBnwIfLYPXzP3MI6_1wAufxUll8Xc8nBLe-QjQu2vvqOAXvk2qNimp7R7B0eS0uFVkLoaoXcw1YOIKDnj1H487x0qRqCJMw",
    description: "High-performance tennis racquet for intermediate to pro players."
  },
  {
    id: "4",
    title: "Cricket Bat",
    price: 2999,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRS56XnUcy1bZ5V1cbAuJAeMQ_Ottu7DojldNOYred1FjmUlJb5DXEA6mPxnceYX2p7qyKZ8c3_WmjSFrUbXvCIN5DkoBmI7cSDpYXSg5GMKl-m6PjnUGQJ",
    description: "English willow cricket bat for power-packed innings."
  },
  {
    id: "5",
    title: "Running Shoes",
    price: 3499,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcROGCBWoCr8vDWjmdVlnp-hga1uxPA2VKqnkFRiaCqEdVVdqA7bDyEHg4qtaBs82-zwyRjAf_e9RNhIpN3rY9YfB6rpzR7Ofp6kuzKXXxoznh5Je33Za6jx3Q",
    description: "Ultra-light running shoes for everyday training and marathons."
  },
  {
    id: "6",
    title: "Football Gloves",
    price: 3499,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQPS0wLD__sTLZOZYxx19zJQxwR2MOyabWJizaQ4NW53hqAOFi-TEMsjpr2ekPxCTob10G1_vb9tmSao1DTdA7i6XuQqu-bOOgUHQJVFkxJ8cdu7BFHZ2isZAI",
    description: "Durable and grippy football gloves for professionals and amateurs."
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = dummyProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <Header />
        <NavBar />
        <div style={{ textAlign: "center", fontSize: "1.3rem", padding: "2rem" }}>Product not found.</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <NavBar />

      <div style={styles.pageBg}>
        <div
          style={styles.card}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          <img
            src={product.image}
            alt={product.title}
            style={styles.image}
          />
          <h1 style={styles.title}>{product.title}</h1>
          <p style={styles.desc}>{product.description}</p>
          <p style={styles.price}>₹{product.price}</p>
          <button
            style={styles.button}
            onClick={() => {
              addToCart(product);
              alert(`${product.title} added to cart!`);
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.07)";
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(251,146,60,0.18)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = styles.button.boxShadow;
            }}
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default ProductDetails;