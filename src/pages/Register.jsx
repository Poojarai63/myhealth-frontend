import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password
    };

    // Save user data in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");

    // Go to Login page
    window.location.href = "/";
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1>MyHealth</h1>

        <p className="subtitle">
          Create your private health account.
        </p>

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="auth-link">
          Already have an account?{" "}

          <Link to="/">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;