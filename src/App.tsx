import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const gallery = document.getElementById('about-me-gallery');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (gallery) {
            gallery.style.opacity = '1';
            gallery.style.transform = 'translateY(0)';
          }
        }
      },
      { threshold: 0.1 }
    );
    if (gallery) observer.observe(gallery);

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ paddingTop: '60px' }}>
      <Header />
      <section
        id="home"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '20px',
          backgroundColor: 'black',
          color: '#1DB954',
          fontSize: '3rem',
        }}
      >
        <h1 style={{ fontSize: '5rem' }}>
          Hey, I'm <span style={{ color: 'white' }}>Dario</span>
        </h1>
      </section>
      <section id="aboutme" style={{ minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
        <h2>About Me</h2>
        <p>
          Howdy! My name is Dario Dias and I'm a{' '}
          <b style={{ color: 'silver' }}>Dallas, TX</b> based computer science student at the{' '}
          <b style={{ color: 'silver' }}>University of North Texas</b>. I love working with technology and
          I'm interested in <b style={{ color: 'silver' }}>IT</b>. In my free time, I love to listen to
          music, play video games, and take pictures!
        </p>
        <div
          id="about-me-gallery"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gridAutoRows: '10px',
            gap: '20px',
            marginTop: '30px',
            width: '100%',
            maxWidth: '1200px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <img src="/path-to-image1.jpg" alt="Image 1" className="about-image" style={{ gridRowEnd: 'span 25' }} />
          <img src="/path-to-image2.jpg" alt="Image 2" className="about-image" style={{ gridRowEnd: 'span 20' }} />
          <img src="/path-to-image3.jpg" alt="Image 3" className="about-image" style={{ gridRowEnd: 'span 30' }} />
          <img src="/path-to-image4.jpg" alt="Image 4" className="about-image" style={{ gridRowEnd: 'span 15' }} />
        </div>
      </section>
      <section id="experience" style={{ minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
        <h2>Experience</h2>
        <p>Describe your professional journey.</p>
      </section>
      <section id="projects" style={{ minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
        <h2>Projects</h2>
        <p>Showcase your work.</p>
      </section>
      <section id="contactme" style={{ minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
        <h2>Contact Me</h2>
        <p>Provide your contact information.</p>
      </section>
      <Footer />
    </div>
  );
};

export default App;
