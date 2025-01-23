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
        <h1 className="typing" style={{ fontSize: '5rem' }}>
          Hey, I'm <span style={{ color: 'white' }}>Dario</span>
        </h1>
      </section>

      {/* About Me Section */}
      <section id="aboutme" style={{ minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
      <h2 className="typing">
          <span style={{ color: 'white' }}>//</span> About{' '}
          <span style={{ color: 'white' }}>Me</span>
        </h2>
        <p>
          Howdy! My name is Dario Dias and I'm a{' '}
          <b style={{ color: 'white' }}>Dallas, TX</b> based computer science student at the{' '}
          <b style={{ color: 'white' }}>University of North Texas</b>. I love working with technology and
          I'm interested in <b style={{ color: 'white' }}>IT</b>. In my free time, I love to listen to
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
          <img src="/images/dariocamera.jpg" alt="Image 1" className="about-image" style={{ gridRowEnd: 'span 25' }} />
          <img src="/images/dariomountain.jpg" alt="Image 2" className="about-image" style={{ gridRowEnd: 'span 20' }} />
          <img src="/images/darioskydive.jpg" alt="Image 3" className="about-image" style={{ gridRowEnd: 'span 30' }} />
          <img src="/images/dariononchalant.jpg" alt="Image 4" className="about-image" style={{ gridRowEnd: 'span 15' }} />
          <img src="/images/dariohandcuff.jpg" alt="Image 5" className="about-image" style={{ gridRowEnd: 'span 22' }} />
        </div>
      </section>
      
      {/* Experience Section */}
<section
  id="experience"
  style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    flexDirection: 'column',
    padding: '50px',
    textAlign: 'center',
    fontSize: '1.6rem', // Larger font size for better readability
    lineHeight: '1.8',
    color: '#1DB954', // Matches the theme
  }}
>
  <h2
    style={{
      fontSize: '2.8rem', // Larger heading size
      marginBottom: '20px', // Add spacing below the heading
    }}
  >
    <span className="typing">
      <span style={{ color: 'white' }}>//</span> Experience
    </span>
  </h2>
  <p style={{ maxWidth: '800px' }}> {/* Limit the width for better alignment */}
    Here's my experience!
  </p>
</section>

      
      {/* Projects Section */}
<section
  id="projects"
  style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    flexDirection: 'column',
    padding: '50px',
    textAlign: 'center',
    fontSize: '1.6rem', // Larger font size for better readability
    lineHeight: '1.8',
    color: '#1DB954', // Matches the theme
  }}
>
  <h2
    style={{
      fontSize: '2.8rem', // Larger heading size
      marginBottom: '20px', // Add spacing below the heading
    }}
  >
    <span className="typing">
      <span style={{ color: 'white' }}>//</span> Projects
    </span>
  </h2>
  <p style={{ maxWidth: '800px' }}> {/* Limit the width for better alignment */}
    Here is some of my work!
  </p>
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
    textAlign: 'left',
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#1DB954',
  }}
>
  <h2
    style={{
      fontSize: '2.8rem',
      marginBottom: '20px',
      textAlign: 'center',
    }}
  >
    <span className="typing">
      <span style={{ color: 'white' }}>//</span> Contact{' '}
      <span style={{ color: 'white' }}>Me!</span>
    </span>
  </h2>
  <ul style={{ maxWidth: '800px', listStyleType: 'disc', paddingLeft: '20px' }}>
    <li>
      You can contact me at{' '}
      <b style={{ color: 'white', fontWeight: 'bold' }}>dariokdias@gmail.com</b>
    </li>
    <li>
      Connect with me on{' '}
      <a
        href="https://www.linkedin.com/in/dario-dias"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
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
        style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
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
