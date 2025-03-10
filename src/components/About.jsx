
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="About Josh" />
          </div>
          <div className="about-text">
            <p>
              Hello! I'm Marvelous, a passionate full-stack developer with a love for creating
              interactive and responsive web applications. My journey in web development
              started 2 years ago, and since then, I've been continuously learning and
              improving my skills.
            </p>
            <p>
              With experience in both front-end and back-end technologies, I enjoy tackling
              complex problems and turning ideas into reality. I'm dedicated to writing clean,
              efficient code and building user-friendly applications.
            </p>
            <p>
              When I'm not coding, you can find me reading tech blogs, or experimenting
              with new technologies. I'm always open to new challenges and opportunities to grow.
            </p>
            <div className="about-buttons">
              <a href="/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
