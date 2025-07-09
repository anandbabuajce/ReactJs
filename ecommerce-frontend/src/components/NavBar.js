// NavBar.js
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userName"); // clear the saved username
    navigate("/"); // go back to home
  };

  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      {/* Right-aligned section */}
      <div style={{ marginLeft: "auto" }}>
        {userName ? (
          <>
            <span>Thank you for shopping, {userName}!</span>
            <button
              onClick={handleLogout}
              style={{ marginLeft: "1rem", background: "transparent", color: "white", border: "none", cursor: "pointer" }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/register"></Link>
        )}
      </div>
    </nav>
  );
}
