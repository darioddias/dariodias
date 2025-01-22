
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
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
          Hey, I'm{' '}
          <span style={{ color: 'white' }}>Dario</span>
        </h1>
      </section>
      <section id="aboutme" style={{ minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
        <h2>About Me</h2>
        <p>Howdy! My name is Dario Dias and I'm a <b style={{ color: "silver" }}>Dallas, TX</b> based computer science student at the <b style={{ color: "silver" }}>University of North Texas</b>. I love working with technology and I'm interested in <b style={{ color: "silver" }}>IT</b>. 
        In my free time I love to listen to music, play video games and take pictures!</p>
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
