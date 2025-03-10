
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes, just show a success message
    // In a real app, you would send this data to a server
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus(null);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>San Francisco, CA</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>josh@example.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
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
          
          <div className="contact-form">
            {formStatus === 'success' && (
              <div className="form-status success">
                Message sent successfully!
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
