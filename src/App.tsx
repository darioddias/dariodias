
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <Header />
      <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Hey, I'm Dario</h1>
      </section>
      <section id="aboutme" style={{ minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
        <h2>About Me</h2>
        <p>Write about yourself here.</p>
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
