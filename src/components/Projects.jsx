
import React, { useState } from 'react';
import otpifyImg from '../assets/images/otpify.png';
import image2 from '../assets/images/plant-planet.png';
import image2 from '../assets/images/secureme-password.png';
import vasfoodImg from '../assets/images/vasFood.png';
import authauraImg from '../assets/images/authaura.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Vasfood - Vas2nets food management system',
      description: 'A full-stack food ordering and management platform that enables staffs to browse menus, place orders, and track their transaction history, with secure authentication and a admin order management dashboard.',
      image: vasfoodImg,
      technologies: ['React ts', 'PHP', 'Mysql', 'JWT'],
      category: 'fullstack',
      liveLink: 'https://vas-food-frontend.vercel.app/',
    },
    {
      id: 2,
      title: 'AuthAura - Secure Identity Management System',
      description: 'A robust identity management application for businesses, featuring user authentication, multi-factor authentication (MFA), biometric login, and OAuth 2.0 integration for secure access control and identity verification.',
      image: authauraImg,
      technologies: ['React js', 'Node js', 'Express', 'MongoDB', 'TailwindCss', 'API'],
      category: 'fullstack',
      liveLink: 'https://authaura-pi.vercel.app/',
    },
    {
      id: 3,
      title: 'OTPify - OTP(one time password) as a service',
      description: 'A developer-focused platform providing OTP generation and delivery via API, allowing easy integration of secure two-factor authentication (2FA) into external applications with token-based validation and configurable delivery methods.',
      image: otpifyImg,
      technologies: ['React ts', 'PHP', 'Laravel', 'Mysql', 'JWT', 'API'],
      category: 'fullstack',
      liveLink: 'https://otpify.vercel.app/',
    },
    {
      id: 4,
      title: 'Task Management API',
      description: 'A secure RESTful API for managing tasks, featuring user authentication, task creation, assignment, and status tracking. Built for integration with frontend clients or internal systems requiring task workflow automation.',
      image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=932&q=80',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'backend',
      liveLink: 'https://todoapp-plum.vercel.app/',
    },
    {
      id: 5,
      title: 'Plant Place E-Commerce Website',
      description: 'A responsive e-commerce frontend for a fictional plant store, allowing users to browse products, view details, and interact with a clean UI. Designed with React for smooth navigation and a visually appealing user experience.',
      image: image1,
      technologies: ['Javascrypt', 'React js', 'CSS'],
      category: 'frontend',
      liveLink: 'https://plantpalace-eight.vercel.app/',
    },
    {
      id: 6,
      title: 'SecureMe Password Generator',
      description: 'A secure web application that generates strong, random passwords for users. Built for a fictional security company, SecureMe Inc., using Flask and React, with a focus on simplicity, usability, and client-side customization.',
      image: image2,
      technologies: ['React js', 'CSS', 'Python', 'Flask'],
      category: 'fullstack',
      liveLink: 'https://secureme-generator.vercel.app/',
    },
  ];

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button 
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
