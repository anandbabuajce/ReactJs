import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

const categories = [
  { name: "Football", icon: "⚽", path: "/category/football" },
  { name: "Basketball", icon: "🏀", path: "/category/basketball" },
  { name: "Tennis", icon: "🎾", path: "/category/tennis" },
  { name: "Running Shoes", icon: "👟", path: "/category/running-shoes" },
  { name: "Cricket", icon: "🏏", path: "/category/cricket" },
  { name: "Fitness & Training", icon: "🏋️‍♂️", path: "/category/fitness-training" },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <NavBar />
      <section className="categories-page" style={{ padding: "40px 0", background: "#f9f9f9" }}>
        <h1 className="categories-title" style={{ textAlign: "center", marginBottom: 32 ,fontFamily:"cursive"}}>EXPLORE</h1>
        <div className="categories-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "32px",
          maxWidth: 900,
          margin: "0 auto"
        }}>
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="category-card"
              style={{
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                padding: "32px 16px",
                textAlign: "center",
                cursor: "pointer",
                fontSize: "1.3rem",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onClick={() => navigate(cat.path)}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{cat.icon}</div>
              <div>{cat.name}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}