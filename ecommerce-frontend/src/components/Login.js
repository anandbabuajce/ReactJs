import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add real authentication here
    localStorage.setItem("userName", username);
    setSuccess(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000); // Show thank you message for 2 seconds, then go to home
  };

  return (
    <div className="login-page">
      {success ? (
        <div className="login-success" style={{ textAlign: "center", marginTop: 40 }}>
          <h2>HAPPY FOR CHOOSING US {username}!</h2>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p>
            Don't have an account?{" "}
            <Link to="/register">Register here</Link>
          </p>
        </form>
      )}
    </div>
  );
}