import React, { useState, useEffect } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

export default function AuthCard() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setSuccessMessage("Registered successfully!");

      localStorage.setItem(
        "userData",
        JSON.stringify({
          email: formData.email,
          password: formData.password,
        })
      );

      setTimeout(() => {
        navigate("/login"); // Redirect to login page
      }, 1500);
    } else {
      setSuccessMessage("");
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="register-outer">
      <div className="diamond"></div>
      <div className="register-wrapper">
        <h2 className="wel">Register Here</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && <div className="error">{errors.name}</div>}

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <div className="error">{errors.email}</div>}

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {errors.password && <div className="error">{errors.password}</div>}

          <div className="input-group">
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          {errors.phone && <div className="error">{errors.phone}</div>}

          <div className="input-group">
            <label style={{ fontSize: "13px", color: "#000" }}>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              Remember me
            </label>
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        {successMessage && <div className="success">{successMessage}</div>}

        <div className="login-link">
          Already have an account?{" "}
          <span className="login-nav-link" onClick={() => navigate("/login")}>
            Login here
          </span>
        </div>
      </div>
    </div>
  );
}
