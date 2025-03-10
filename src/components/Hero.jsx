
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Josh Smith</span>
            <span className="role">Full Stack Developer</span>
          </h1>
          <p className="hero-description">
            I build exceptional and accessible digital experiences for the web.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Josh Smith" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
