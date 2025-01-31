import { useState } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleNavigation = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 60; // Height of the header
      const additionalOffset = 20;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight - additionalOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'black',
        zIndex: 1000,
        borderBottom: '4px solid #1DB954', // Green border at the bottom
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center', // Align items vertically
          justifyContent: 'space-between', // Space out logo and navigation
          padding: '10px 5%',
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#1DB954',
          }}
        >
          Dario
        </div>

        {/* Navigation */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          {['Home', 'About Me', 'Experience', 'Projects', 'Contact Me'].map((item) => {
            const id = item.replace(/\s+/g, '').toLowerCase();
            return (
              <button
                key={id}
                onClick={() => handleNavigation(id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === id ? 'white' : '#1DB954',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
