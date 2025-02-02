import { useState } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleNavigation = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 60;
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
        backgroundColor: '#09090f',
        zIndex: 1000,
        borderBottom: '4px solid #f0b634',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 3%', // Adjusted padding for more spacing
        }}
      >
        {/* Logo - Moves more to the left */}
        <div
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#f0b634',
            marginLeft: '-20px', // Moves Dario more left
          }}
        >
          Dario
        </div>

        {/* Navigation - Moves more to the right */}
        <div
          style={{
            display: 'flex',
            gap: '15px',
            marginRight: '-10px', // Moves navigation buttons more right
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
                  color: activeSection === id ? '#ffffff' : '#f0b634',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                  padding: '5px 10px', // Slight padding for spacing
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
