import { useState, useEffect } from 'react';
import React from 'react';
import toledoLogo from './assets/toledo-logo.png';
import githubLogo from './assets/git_hub_logo.png';
import linkedInLogo from './assets/LinkedIn_Logo.png';
import picofme from './assets/me.png';
import './App.css';

//time function that updates once every second
function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p className="current-time">
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
    </p>
  );
}

function App() {
  return (
    <div className="app-container">
      <div className = "top-section">
        <h1 className="About-Me">
          Zackery Hengartner | Computer Science & Engineering
        </h1>
        <CurrentTime />
        <input type="checkbox" className="theme-checkbox" />
      </div>


      <img
        src={picofme}
        className="picofme"
        alt="Picture of Me"
      />
      <h1 class="reveal-text">Hello There, Welcome To My Portfolio!</h1>



      <div className="about-section">
        <img src={toledoLogo} className="logo Toledo" alt="Toledo logo" />
        <p className="About-Me-Text">
          Hello! My name is Zack Hengartner and I am a student at the University of Toledo studying Computer Science. I
          have a passion for coding and love to create new projects in my free time. Feel free to reach out to me on
          GitHub or LinkedIn!
        </p>
      </div>

      <div className="social-links">
        <a href="https://github.com/zackhengartner" target="_blank">
          <img src={githubLogo} className="logo" alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/zackery-hengartner/" target="_blank">
          <img src={linkedInLogo} className="logo linkedIn" alt="LinkedIn logo" />
        </a>
      </div>

      <p className="reach-out">Places To Find Me!</p>
    </div>
  );
}

export default App;
