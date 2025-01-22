import { useState } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleNavigation = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          padding: '10px 5%',
          flexWrap: 'nowrap', // Ensures the items don’t wrap
          overflowX: 'auto', // Allows scrolling on smaller screens if needed
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
                whiteSpace: 'nowrap', // Prevents text from breaking into multiple lines
                cursor: 'pointer',
                transition: 'color 0.3s',
              }}
            >
              {item}
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
