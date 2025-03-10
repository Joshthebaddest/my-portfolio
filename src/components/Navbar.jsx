
import React, { useState, useEffect } from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <a href="#home" className="logo">Marvelous.dev</a>
          
          <div className="navbar-right">
            <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button onClick={toggleDarkMode} className="theme-toggle">
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
            
            <div 
              className={`hamburger ${menuOpen ? 'active' : ''}`} 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
