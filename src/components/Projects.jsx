
import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product management, cart functionality, and payment integration.',
      image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      liveLink: 'https://project1.com',
      codeLink: 'https://github.com/username/project1',
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'A dashboard that displays analytics and metrics from various social media platforms in one place.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80',
      technologies: ['Vue.js', 'Express', 'Chart.js', 'OAuth'],
      category: 'frontend',
      liveLink: 'https://project2.com',
      codeLink: 'https://github.com/username/project2',
    },
    {
      id: 3,
      title: 'Task Management API',
      description: 'A RESTful API for managing tasks, with user authentication, task creation, assignment, and status tracking.',
      image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=932&q=80',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'backend',
      liveLink: 'https://project3.com',
      codeLink: 'https://github.com/username/project3',
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A weather application that shows current weather and forecast for any location with a clean, intuitive interface.',
      image: 'https://plus.unsplash.com/premium_photo-1673288397258-ae9d63a399dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      technologies: ['React', 'WeatherAPI', 'CSS3', 'Axios'],
      category: 'frontend',
      liveLink: 'https://project4.com',
      codeLink: 'https://github.com/username/project4',
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
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    View Code
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
