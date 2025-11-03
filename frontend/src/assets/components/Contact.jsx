import React, { useState } from "react";
import DashboardLayout from "./Dashboard";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here (e.g. API call)
    setSubmitted(true);
  };

  return (<><DashboardLayout/>
    <div className="contact-page">
      <style>{`
        .contact-page {
          font-family: 'Segoe UI', sans-serif;
          padding: 40px 20px;
          background: #f7f9fc;
          min-height: 100vh;
          color: #1e293b;
        }
        .contact-header {
          background-image: url("https://www.lystloc.com/blog/wp-content/uploads/2023/03/How-to-Plan-the-Best-Sales-Routes-for-sales-employees.webp");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          height: 200px;
          margin-bottom: 30px;
          animation: fadeIn 1.2s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .contact-form-wrapper {
          background: white;
          max-width: 500px;
          margin: 0 auto;
          padding: 30px 25px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          animation: zoomIn 0.8s ease-in-out both;
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        .contact-title {
          font-size: 1.8rem;
          margin-bottom: 15px;
          text-align: center;
          color: #1e3a8a;
        }
        .contact-input, .contact-textarea {
          width: 100%;
          padding: 12px 14px;
          margin-bottom: 18px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }
        .contact-input:focus, .contact-textarea:focus {
          border-color: #2563eb;
          outline: none;
        }
        .contact-button {
          width: 100%;
          padding: 14px;
          background: #2563eb;
          color: white;
          font-size: 1rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .contact-button:hover {
          background: #1e40af;
        }
        .success-message {
          text-align: center;
          color: #16a34a;
          font-weight: 500;
          margin-top: 15px;
          animation: fadeInText 0.8s ease-in-out;
        }
        @keyframes fadeInText {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 600px) {
          .contact-form-wrapper { padding: 20px; }
          .contact-title { font-size: 1.5rem; }
        }
      `}</style>

      <div className="contact-header" />

      <div className="contact-form-wrapper">
        <h2 className="contact-title">Get in Touch with Ignitia</h2>
        {submitted ? (
          <div className="success-message">Thank you! Your message has been received.</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact-input"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact-input"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="How can we help?"
              className="contact-textarea"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="contact-button">Send Message</button>
          </form>
        )}
      </div>
    </div></>
  );
};

export default Contact;
