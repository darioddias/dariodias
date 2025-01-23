import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';

const App = () => {
  // Intersection Observer to trigger animations when elements come into view
  useEffect(() => {
    const headings = document.querySelectorAll('.typing');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the element is visible
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <div style={{ paddingTop: '60px' }}>
      <Header />

      {/* Home Section */}
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
          <span className="typing">
            <span style={{ color: 'white' }}>//</span> Hey, I'm{' '}
            <span style={{ color: 'white' }}>Dario</span>
          </span>
        </h1>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '50px',
          textAlign: 'center',
        }}
      >
        <h2>
          <span className="typing">
            <span style={{ color: 'white' }}>//</span> About{' '}
            <span style={{ color: 'white' }}>Me</span>
          </span>
        </h2>
        <p>
          Howdy! My name is Dario Dias and I'm a{' '}
          <b style={{ color: 'white' }}>Dallas, TX</b> based computer science student at the{' '}
          <b style={{ color: 'white' }}>University of North Texas</b>. I love working with technology
          and I'm interested in <b style={{ color: 'white' }}>IT</b>. In my free time I love to
          listen to music, play video games, and take pictures!
        </p>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '50px',
          textAlign: 'center',
        }}
      >
        <h2>
          <span className="typing">
            <span style={{ color: 'white' }}>//</span> Experience
          </span>
        </h2>
        <p>Here's my experience!</p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '50px',
          textAlign: 'center',
        }}
      >
        <h2>
          <span className="typing">
            <span style={{ color: 'white' }}>//</span> Projects
          </span>
        </h2>
        <p>Here is some of my work!</p>
      </section>

      {/* Contact Me Section */}
      <section
        id="contactme"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '50px',
          textAlign: 'center',
        }}
      >
        <h2>
          <span className="typing">
            <span style={{ color: 'white' }}>//</span> Contact{' '}
            <span style={{ color: 'white' }}>Me!</span>
          </span>
        </h2>
        <p>You can contact me at dariokdias@gmail.com</p>
      </section>

      <Footer />
    </div>
  );
};

export default App;
