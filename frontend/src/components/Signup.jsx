import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // First try to create the user
      const response = await axios.post(
        "http://localhost:8000/api/signup/",
        {
          username: formData.username,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data) {
        // Registration successful
        setLoading(false);
        // Redirect to login page
        navigate("/login", {
          state: {
            message:
              "Registration successful! Please login with your credentials.",
          },
        });
      }
    } catch (err) {
      setLoading(false);
      if (err.response) {
        // Handle specific error messages from backend
        const serverError = err.response.data;
        if (typeof serverError === "object") {
          // Handle multiple error messages
          const errorMessages = Object.values(serverError).flat().join(" ");
          setError(errorMessages);
        } else {
          setError(serverError || "Registration failed. Please try again.");
        }
      } else {
        setError("Network error. Please check your connection.");
      }
      console.error("Signup error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Create Account</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Choose a username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Choose a password"
              minLength="8"
            />
          </div>
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <p className="auth-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
