import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">NexMeet</h2>

        <div className="navlist">
          <p onClick={() => router("/aljk23")}>Join as Guest</p>
          <p onClick={() => router("/auth")}>Register</p>
          <button onClick={() => router("/auth")} className="loginBtn">
            Login
          </button>
        </div>
      </nav>

        

      {/* Hero session */}
      <div className="landingMainContainer">

        {/* Left */}
        <div className="leftContent">
          <h1>
            <span>Connect</span> with your loved ones
          </h1>

          <p className="subtitle">
            Seamless video calling experience anytime, anywhere
          </p>

          <div className="ctaButtons">
            <Link to="/auth" className="primaryBtn">
              Get Started
            </Link>

            <button className="secondaryBtn">
              Learn More
            </button>
          </div>
        </div>



{/* features  3 cards */}
    <div className="features">
  <div className="featureCard">
    <h3>📹 HD Video Calls</h3>
    <p>Crystal clear video quality for seamless meetings</p>
  </div>

  <div className="featureCard">
    <h3>🔒 Secure & Private</h3>
    <p>End-to-end encrypted communication</p>
  </div>

  <div className="featureCard">
    <h3>⚡ Fast Connection</h3>
    <p>Low latency real-time communication</p>
  </div>
</div>

    

        {/* Right */}
        <div className="rightContent">
          <img src="/mobile.png" alt="video call" />
        </div>
      </div>
    </div>
  );
}