const Header = () => {
    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <header style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'black', zIndex: 1000 }}>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '10px 0' }}>
          {['Home', 'About Me', 'Experience', 'Projects', 'Contact Me'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.replace(/\s+/g, '').toLowerCase())}
              style={{
                background: 'none',
                border: 'none',
                color: '#1DB954',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              {item}
            </button>
          ))}
        </nav>
        <div style={{ height: '3px', backgroundColor: '#1DB954', width: '100%' }} />
      </header>
    );
  };
  
  export default Header;
  