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

  const sectionMappings: { [key: string]: string } = {
    'Home': 'home',
    'About Me': 'about', // Corrected to match App.tsx
    'Experience': 'experience',
    'Projects': 'projects',
    'Contact Me': 'contactme',
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
          flexWrap: 'nowrap',
          overflowX: 'auto',
        }}
      >
        {Object.keys(sectionMappings).map((item) => {
          const id = sectionMappings[item];
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
      </nav>
    </header>
  );
};

export default Header;
