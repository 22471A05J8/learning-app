import React from "react";
import DashboardLayout from "./Dashboard";

const About = () => (
    <>
      <DashboardLayout />
  <div className="about-container">
    <style>{`
      .about-container {
        background-color: white;
        padding: 60px 20px;
        font-family: 'Segoe UI', sans-serif;
        line-height: 1.6;
        color: #333;
        animation: fadeInPage 1s ease-in-out;
      }

      @keyframes fadeInPage {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .about-inner {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
      }

      .about-bg {
        width: 100%;
        height: 340px;
        background-image: url("https://www.alphalearn.com/wp-content/uploads/2021/11/e-learning-2.jpg");
        background-size: cover;
        background-position: center;
        border-radius: 12px;
        margin-bottom: 40px;
        animation: zoomIn 1.2s ease-in-out both;
      }

      @keyframes zoomIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }

      .about-title {
        font-size: 2.8rem;
        color: #1e3a8a;
        margin-bottom: 20px;
      }

      .about-subtitle {
        font-size: 1.4rem;
        color: #475569;
        margin-bottom: 25px;
      }

      .about-text {
        font-size: 1.05rem;
        color: #555;
        margin-bottom: 20px;
        text-align: justify;
      }

      .highlight {
        color: #2563eb;
        font-weight: 600;
      }

      .feature-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        margin-top: 30px;
      }

      .feature-item {
        flex: 1 1 200px;
        padding: 15px 10px;
        background: #f4f6f8;
        border-radius: 8px;
        font-size: 1rem;
        color: #1e293b;
        transition: transform 0.3s, background 0.3s;
        cursor: default;
      }

      .feature-item:hover {
        transform: translateY(-5px);
        background: #e2e8f0;
      }

      @media (max-width: 600px) {
        .about-title { font-size: 2.2rem; }
        .about-subtitle { font-size: 1.2rem; }
      }
    `}</style>

    <div className="about-inner">
      <div className="about-bg" />

      <h1 className="about-title">About Ignitia</h1>
      <h2 className="about-subtitle">Igniting your path to knowledge and growth</h2>

      <p className="about-text">
        Welcome to <strong>Ignitia</strong>, a visionary e-learning platform dedicated to transforming how individuals learn and evolve. We are committed to delivering education that is not only accessible and effective, but also intrinsically motivating and deeply relevant.
      </p>

      <p className="about-text">
        At Ignitia, we unite <span className="highlight">expert-led courses</span>, <span className="highlight">interactive quizzes</span>, <span className="highlight">video tutorials</span>, <span className="highlight">downloadable study guides</span>, and <span className="highlight">career-focused resources</span>—all designed to help learners excel in a dynamic world.
      </p>

      <p className="about-text">
        Whether you're building your foundational skills, brushing up for interviews, or pursuing continuous growth, Ignitia is your companion on the journey—equipping you with clarity, engagement, and confidence every step of the way.
      </p>

      <div className="feature-list">
        <div className="feature-item">Structured Learning Paths</div>
        <div className="feature-item">Engaging Multimedia Content</div>
        <div className="feature-item">Flexible & Self-Paced</div>
        <div className="feature-item">Downloadable PDFs</div>
        <div className="feature-item">Real-World Interview Prep</div>
        <div className="feature-item">Progress Tracking Tools</div>
      </div>
    </div>
  </div></>
);

export default About;
