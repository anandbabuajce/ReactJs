import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Save the name in localStorage (like Register.js)
    localStorage.setItem("userName", username);
    setSuccess(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000); // Show thank you message for 2 seconds, then go to home
  };

  return (
    <div className="signup-page">
      {success ? (
        <div className="signup-success" style={{ textAlign: "center", marginTop: 40 }}>
          <h2>Thank You For Choosing Us {username}!</h2>
        </div>
      ) : (
        <form className="signup-form" onSubmit={handleSignup}>
          <h2>Create an Account</h2>
          <input
            type="text"
            placeholder="Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
          <p>
            Already have an account?{" "}
            <Link to="/login">Login here</Link>
          </p>
        </form>
      )}
    </div>
  );
}