import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get registered user from localStorage
    const registeredUser = JSON.parse(
      localStorage.getItem("user")
    );

    // Check if user has registered
    if (!registeredUser) {
      alert("Please register first.");
      return;
    }

    // Check email and password
    if (
      email === registeredUser.email &&
      password === registeredUser.password
    ) {
      alert("Login successful!");

      // Go to Dashboard
      window.location.href = "/dashboard";
    } else {
      alert("Invalid email or password.");
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