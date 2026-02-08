import { useState, useEffect } from 'react';
import React from 'react';
import toledoLogo from './assets/toledo-logo.png';
import githubLogo from './assets/git_hub_logo.png';
import linkedInLogo from './assets/LinkedIn_Logo.png';
import picofme from './assets/me.png';
import pythonLogo from './assets/pythonLogo.png';
import javaLogo from './assets/javaLogo.png';
import cLogo from './assets/cLogo.png';
import cplusplusLogo from './assets/cplusplusLogo.png';
import htmlLogo from './assets/htmlLogo.png';
import cssLogo from './assets/cssLogo.png';


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
      <nav className="main-Nav">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a>Projects</a>
        <a href="#socials">Socials</a>
      </nav>

      <div className = "top-section">
        <h1 className="About-Me">
          Zackery Hengartner | Computer Science & Engineering
        </h1>
        <CurrentTime />
        <input type="checkbox" className="theme-checkbox" />
      </div>

      <div className = "photo-aboutme">
        <img
        src={picofme}
        className="picofme"
        alt="Picture of Me"
      />
      <h1 class="reveal-text">Hello There, Welcome To My Portfolio!</h1>
      </div>

      <div id="about" className="about-section">
        <p><em>Hint: Hover Over Logo</em></p>
        <img src={toledoLogo} className="logoToledo" alt="Toledo logo" />
        <p className="About-Me-Text">
          I currently attend the <strong>University of Toledo</strong>, studying Computer Science & Engineering. I am an Elyria resident and still live there throughout the semester.
          You may be wondering: <blockquote><em>"do you have to travel 1-2 hours every day for class?"</em></blockquote> to which the simple answer to this is <strong>NO</strong>. I am very fortunate to be close to
          the UPRC, which is a satellite campus setting provided by <strong>LCCC</strong> which is widely used for the University Partnership Program with UT. On this campus, we are
          fortunate to have UT professors on OUR campus in North Ridgeville! Pretty cool right?
        </p>
      </div>

      <div id="skills" className="skill-section">

        <h1 className="skills-header">Skills: (Programming Languages, Software Experience, IDEs & Tools</h1>
        <nav class="menu">
        <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
        <label class="menu-open-button" for="menu-open">
            <p className = "internal-text"><strong>Languages</strong></p>
        </label>

        
        <img class="menu-item red" src ={pythonLogo} />
        <img class="menu-item orange" src ={javaLogo} />
        <img class="menu-item gold" src ={cLogo} />
        <img class="menu-item green" src ={cplusplusLogo} />
        <img class="menu-item blue" src ={htmlLogo} />
        <img class="menu-item indigo" src ={cssLogo} />

        </nav>
        
        <p><strong>Programming Languages:</strong> Java, JavaScript, Python, C++, C, HTML, CSS, SQL, x86, ARM</p>
        <p><strong>Tools & IDEs:</strong> Eclipse, Visual Studios 2022, VS Code, IAR Workbench, Playwright, Git, Azure Devops, MPLAB</p>
        <p><strong>Software:</strong> Microsoft Office Suite, Adobe Creative Cloud, Altium, LTspice, MATLAB</p>
      </div>

      <div id="socials" className="social-links">
        <a href="https://github.com/zackhengartner" target="_blank">
          <img src={githubLogo} className="logo" alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/zackery-hengartner/" target="_blank">
          <img src={linkedInLogo} className="logo linkedIn" alt="LinkedIn logo" />
        </a>
        <p className="reach-out">Places To Find Me!</p>
      </div>
    </div>
  );
}

export default App;
