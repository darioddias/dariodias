import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

const GITHUB_LANG_COLORS: { [key: string]: string } = {
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  CSS: "#563D7C",
  HTML: "#E34C26",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Shell: "#89E051",
};

const App = () => {
  const [languages, setLanguages] = useState<{ [key: string]: number }>({});
  const [totalBytes, setTotalBytes] = useState(0);

  useEffect(() => {
    // Fetch GitHub repository language stats
    fetch("https://api.github.com/repos/darioddias/dariodias/languages")
      .then((response) => response.json())
      .then((data) => {
        setLanguages(data);
        setTotalBytes(Object.values(data).reduce((a, b) => a + b, 0));
      })
      .catch((error) => console.error("Error fetching languages:", error));
  
    // Typing Animation
    const typingElements = document.querySelectorAll('.typing');
    typingElements.forEach((el) => {
      el.classList.add('animate'); // Adds the animate class to trigger animation
    });
  
    // Arrow & Fade-in Observer
    const scrollIndicator = document.querySelector(".scroll-indicator");
    const fadeElements = document.querySelectorAll('.fade-in');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.classList.contains("scroll-indicator")) {
            // Hide or show scroll indicator
            if (!entry.isIntersecting) {
              scrollIndicator?.classList.add("hidden");
            } else {
              scrollIndicator?.classList.remove("hidden");
            }
          } else {
            // Handle fade-in effect
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            } else {
              entry.target.classList.remove("visible");
            }
          }
        });
      },
      { threshold: 0.1 }
    );
  
    // Observe elements
    observer.observe(document.querySelector("#home")!);
    fadeElements.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);


  return (
    <div style={{ paddingTop: '60px' }}>
      <Header />
      <section
        id="home"
        className="typing-container fade-in"
      >
        <h1
          className="typing"
        >
          <span style={{ color: '#f0b634' }}>//</span> Hey, I'm <span style={{ color: '#f0b634' }}>Dario</span>
        </h1>

        <div className="scroll-indicator fade-in">
          <i className="fas fa-chevron-down"></i> {/* FontAwesome icon */}
        </div>
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
          <span style={{ color: '#f0b634' }}>//</span> About{' '}
          <span style={{ color: '#f0b634' }}>Me</span>
        </h2>
        <p
          style={{
            maxWidth: '800px',
            fontSize: '1.5rem',
            lineHeight: '1.5',
            margin: '20px auto',
            color: 'white',
          }}
        >
          Howdy! My name is Dario Dias and I'm a{' '}
          <b style={{ color: '#f0b634' }}>Dallas, TX</b> based computer science
          student at the{' '}
          <b style={{ color: '#f0b634' }}>University of North Texas</b>. I love
          working with technology and I'm interested in{' '}
          <b style={{ color: '#f0b634' }}>IT</b>. In my free time, I love to
          listen to music, play video games, and take pictures!
        </p>

        <div className="gallery-card">
          <div id="about-me-gallery">
            <img
              src="images/dariocamera.jpg"
              alt="Image 1"
              className="about-image"
            />
            <img
              src="images/dariohot.jpg"
              alt="Image 2"
              className="about-image"
            />
            <img
              src="images/dariohead.jpg"
              alt="Image 3"
              className="about-image"
            />
            <img
              src="images/dariomountain.jpg"
              alt="Image 5"
              className="about-image"
            />
            <img
              src="images/darioskydive.jpg"
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
          <span style={{ color: '#f0b634' }}>//</span> Experience
        </h2>
        <div className="experience-container">

    {/* IT Support Specialist */}
    <div className="experience-card">
      <h3>IT Support Specialist</h3>
      <p className="company">UNT College of Education | Denton, Texas</p>
      <p className="date">September 2024 – Present</p>
      <ul>
        <li>Managed user requests via <b>RDP</b> and <b>Active Directory</b>, resolving <b>90%</b> of issues on first attempt.</li>
        <li>Assisted faculty with university <b>hardware troubleshooting</b>, reducing downtime by <b>30%</b>.</li>
        <li>Collaborated with a small team to efficiently address <b>IT support tickets</b>.</li>
        <li>Enforced <b>security policies</b> to ensure compliance with university <b>IT standards</b>.</li>
        <li>Provided <b>in-person</b> and <b>virtual assistance</b>, enhancing support accessibility for faculty and staff.</li>
      </ul>
    </div>

    {/* Research Assistant */}
    <div className="experience-card">
      <h3>Research Assistant</h3>
      <p className="company">UNT College of Engineering | Denton, Texas</p>
      <p className="date">August 2023 – May 2024</p>
      <ul>
        <li>Researched <b>multithreaded</b> and <b>multicore architectures</b>, analyzing <b>processing</b> and <b>memory systems</b> for efficiency improvements.</li>
        <li>Developed and tested software tools like <b>GEM5</b> and <b>Cacti</b>, optimizing cache memory and enhancing hardware performance.</li>
        <li>Engineered <b>hardware/software solutions</b> to improve <b>system performance</b> and reduce <b>energy consumption</b> by <b>45.7%</b>.</li>
      </ul>
    </div>

    {/* IT Help Desk */}
    <div className="experience-card">
      <h3>IT Help Desk</h3>
      <p className="company">UNT College of Engineering | Denton, Texas</p>
      <p className="date">March 2022 – August 2023</p>
      <ul>
        <li>Deployed and managed over <b>3,000 desktops</b> and devices, ensuring seamless operation.</li>
        <li>Diagnosed and repaired <b>hardware</b> and <b>software issues</b> on <b>Dell enterprise computers</b>, reducing downtime by <b>25%</b>.</li>
        <li>Troubleshot and resolved <b>system failures</b>, improving overall <b>IT efficiency</b>.</li>
        <li>Maintained <b>software installations</b>, ensuring up-to-date and secure systems.</li>
      </ul>
    </div>

      </div>
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
    <span style={{ color: '#f0b634' }}>//</span> Projects
  </h2>

  <div className="projects-container">
    {/* Project 1: r3wind */}
    <div className="project-card">
      <h3>r3wind</h3>
      <p className="project-description">
        A music tracking app that connects with Spotify to display listening habits.
      </p>
      <div className="tech-stack">
        <span className="tech-badge react">React</span>
        <span className="tech-badge vite">Vite</span>
        <span className="tech-badge flask">Flask</span>
        <span className="tech-badge api">Spotify API</span>
      </div>
      <div className="project-links">
        <a
          href="https://github.com/darioddias/r3wind"
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          View
        </a>
      </div>
    </div>

    {/* Project 2: Network Speed Test */}
    <div className="project-card">
      <h3>Network Speed Test</h3>
      <p className="project-description">
        A tool to measure network speeds and analyze latency.
      </p>
      <div className="tech-stack">
        <span className="tech-badge python">Python</span>
        <span className="tech-badge flask">Flask</span>
        <span className="tech-badge api">Speedtest API</span>
      </div>
      <div className="project-links">
        <a
          href="https://github.com/darioddias/NetworkSpeedTest"
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          View
        </a>
      </div>
    </div>

    {/* Project 3: JWKS Server */}
    <div className="project-card">
      <h3>JWKS Server</h3>
      <p className="project-description">
        JSON Web Key Set server implementation for authentication.
      </p>
      <div className="tech-stack">
        <span className="tech-badge node">Node.js</span>
        <span className="tech-badge express">Express</span>
        <span className="tech-badge jwt">JWT</span>
      </div>
      <div className="project-links">
        <a
          href="https://github.com/darioddias/JWKS-Server"
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          View
        </a>
      </div>
    </div>
  </div>
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
    <span style={{ color: '#f0b634' }}>//</span> Contact{' '}
    <span style={{ color: '#f0b634' }}>Me!</span>
  </h2>

  <div className="contact-container">
    {/* Email */}
    <a
      href="mailto:dariokdias@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-icon"
    >
      <i className="fas fa-envelope"></i>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/dario-dias"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-icon"
    >
      <i className="fab fa-linkedin"></i>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/darioddias"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-icon"
    >
      <i className="fab fa-github"></i>
    </a>
  </div>
</section>

       {/* GitHub-Style Language Bar */}
       <section className="language-stats">
        <h3>stats</h3>
        <div className="language-bar">
          {Object.entries(languages).map(([language, bytes]) => (
            <div
              key={language}
              className="language-segment"
              style={{
                width: `${(bytes / totalBytes) * 100}%`,
                backgroundColor: GITHUB_LANG_COLORS[language] || "#CCCCCC",
              }}
            ></div>
          ))}
        </div>
        <ul className="language-list">
          {Object.entries(languages).map(([language, bytes]) => (
            <li key={language}>
              <span
                className="language-dot"
                style={{ backgroundColor: GITHUB_LANG_COLORS[language] || "#CCCCCC" }}
              ></span>
              {language}: {((bytes / totalBytes) * 100).toFixed(1)}%
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default App;
