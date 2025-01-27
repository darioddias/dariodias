import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Typing Animation
    const typingElements = document.querySelectorAll('.typing');
    typingElements.forEach((el) => {
      el.classList.add('animate'); // Adds the animate class to trigger animation
    });

    // Fade-in and Fade-out on Scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ paddingTop: '60px' }}>
      <Header />
      <section
        id="home"
        className="typing-container fade-in"
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
        <h1
          className="typing"
          style={{
            fontSize: '5rem',
            margin: '0 auto',
          }}
        >
          <span style={{ color: 'white' }}>//</span> Hey, I'm <span style={{ color: 'white' }}>Dario</span>
        </h1>
      </section>

      {/* About Me Section */}
      <section
        id="aboutme"
        className="fade-in"
        style={{
          minHeight: '100vh',
          padding: '50px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 className="typing">
          <span style={{ color: 'white' }}>//</span> About{' '}
          <span style={{ color: 'white' }}>Me</span>
        </h2>
        <p
          style={{
            maxWidth: '800px',
            fontSize: '1.5rem',
            lineHeight: '1.5',
            margin: '20px auto',
            color: '#1DB954',
          }}
        >
          Howdy! My name is Dario Dias and I'm a{' '}
          <b style={{ color: 'white' }}>Dallas, TX</b> based computer science
          student at the{' '}
          <b style={{ color: 'white' }}>University of North Texas</b>. I love
          working with technology and I'm interested in{' '}
          <b style={{ color: 'white' }}>IT</b>. In my free time, I love to
          listen to music, play video games, and take pictures!
        </p>

        <div className="gallery-card">
          <div id="about-me-gallery">
            <img
              src="/images/dariocamera.jpg"
              alt="Image 1"
              className="about-image"
            />
            <img
              src="/images/dariohot.jpg"
              alt="Image 2"
              className="about-image"
            />
            <img
              src="/images/dariohead.jpg"
              alt="Image 3"
              className="about-image"
            />
            <img
              src="/images/dariomountain.jpg"
              alt="Image 5"
              className="about-image"
            />
            <img
              src="/images/darioskydive.jpg"
              alt="Image 6"
              className="about-image"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="fade-in"
        style={{
          minHeight: '100vh',
          padding: '50px',
          textAlign: 'center',
        }}
      >
        <h2 className="typing">
          <span style={{ color: 'white' }}>//</span> Experience
        </h2>
        <p>Here's my experience!</p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="fade-in"
        style={{
          minHeight: '100vh',
          padding: '50px',
          textAlign: 'center',
        }}
      >
        <h2 className="typing">
          <span style={{ color: 'white' }}>//</span> Projects
        </h2>
        <p>Here is some of my work!</p>
      </section>

      {/* Contact Me Section */}
      <section
        id="contactme"
        className="fade-in"
        style={{
          minHeight: '100vh',
          padding: '50px',
          textAlign: 'center',
        }}
      >
        <h2 className="typing">
          <span style={{ color: 'white' }}>//</span> Contact{' '}
          <span style={{ color: 'white' }}>Me!</span>
        </h2>
        <ul
          style={{
            maxWidth: '800px',
            listStyleType: 'disc',
            paddingLeft: '20px',
          }}
        >
          <li>
            You can contact me at{' '}
            <b style={{ color: 'white', fontWeight: 'bold' }}>
              dariokdias@gmail.com
            </b>
          </li>
          <li>
            Connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/dario-dias"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              LinkedIn!
            </a>
          </li>
          <li>
            Check out my{' '}
            <a
              href="https://github.com/darioddias"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              GitHub :D
            </a>
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default App;
