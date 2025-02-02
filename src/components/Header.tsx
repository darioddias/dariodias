import { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Close menu when switching back to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar">
      <nav className="nav-container">
        <div className="logo">Dario</div>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#aboutme">About Me</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contactme">Contact Me</a>
          </div>
        ) : (
          // Mobile Hamburger Menu
          <button 
            className={`hamburger ${menuOpen ? "open" : ""}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </nav>

      {/* Mobile Dropdown Navigation */}
      {isMobile && (
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#aboutme" onClick={() => setMenuOpen(false)}>About Me</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contactme" onClick={() => setMenuOpen(false)}>Contact Me</a>
        </div>
      )}
    </header>
  );
};

export default Header;
