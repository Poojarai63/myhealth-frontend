import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to backend
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      // If login failed
      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // Save JWT token
      localStorage.setItem("token", data.token);

      // Save user information
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login successful!");

      // Go to Dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);

      alert(
        "Unable to connect to server. Please make sure backend is running."
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1>MyHealth</h1>

        <p className="subtitle">
          Your medical history, always with you.
        </p>

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="auth-link">
          Don't have an account?{" "}

          <Link to="/register">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;