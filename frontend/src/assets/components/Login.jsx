import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Here you can replace with backend login call if you want
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (!storedData) {
      setError("No registered user found. Please register first.");
      setSuccessMessage("");
      return;
    }

    if (
      loginData.email === storedData.email &&
      loginData.password === storedData.password
    ) {
      setError("");
      setSuccessMessage("Login successful!");
      setTimeout(() => {
        navigate("/Page");
      }, 1500);
    } else {
      setSuccessMessage("");
      setError("Invalid email or password");
    }
  };

  const handleForgotPassword = async () => {
    const email = window.prompt("Please enter your email to reset password:");
    if (!email) return; // if prompt canceled or empty

    setError("");
    setSuccessMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to send reset email");
        setLoading(false);
        return;
      }

      setSuccessMessage("Password reset email sent! Check your inbox.");
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-outer">
      {/* Diamond background */}
      <div className="diamond"></div>

      {/* Login Card */}
      <div className="login-wrapper">
        <h1 className="wel">Welcome back to Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <i className="fa fa-user icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <i className="fa fa-lock icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="error">{error}</p>}
          {successMessage && <p className="success">{successMessage}</p>}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Sending..." : "LOGIN"}
          </button>

          <span
            className="forgot-password"
            onClick={handleForgotPassword}
            style={{ cursor: "pointer" }}
          >
            Forgot Password?
          </span>
        </form>

        <div className="register-link">
          Don't have an account?{" "}
          <span
            className="register-nav-link"
            onClick={() => navigate("/Register")}
            style={{ cursor: "pointer" }}
          >
            Register here
          </span>
        </div>
      </div>
    </div>
  );
}
