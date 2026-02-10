import React, { useState, useEffect } from "react";
import toledoLogo from "./assets/toledo-logo.png";
import githubLogo from "./assets/git_hub_logo.png";
import linkedInLogo from "./assets/LinkedIn_Logo.png";

//Coding Languages Logos
import pythonLogo from "./assets/pythonLogo.png";
import javaLogo from "./assets/javaLogo.png";
import cLogo from "./assets/cLogo.png";
import cplusplusLogo from "./assets/cplusplus.png";
import htmlLogo from "./assets/htmlLogo.png";
import cssLogo from "./assets/cssLogo.png";
import picofme from "./assets/zockidy.png";
import javaScript from "./assets/javaScript.png";
import bashLogo from "./assets/bashLogo.png";
import powerShell from "./assets/powerShell.png";

//Tools/IDEs Logos
import vs2022 from "./assets/vs2022.png";
import vsCode from "./assets/vsCode.png";
import eclipseLogo from "./assets/eclipseLogo.png";
import azureDevops from "./assets/azureDevops.png";
import gitLogo from "./assets/gitLogo.png";
import mplabLogo from "./assets/mplabLogo.png";

//Software Logos
import altiumLogo from "./assets/altiumLogo.png";
import ltspiceLogo from "./assets/ltspiceLogo.png";
import matlabLogo from "./assets/matlabLogo.png";


import "./App.css";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p className="current-time">
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
    </p>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <nav className="main-Nav">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#socials">Socials</a>
      </nav>

      <section id="about" className="page bg1">
        <div className="page-inner">
          <div className="top-section">
            <h1 className="About-Me">Zackery Hengartner | Computer Science & Engineering</h1>
          </div>

          <div className="photo-aboutme">
            <img src={picofme} className="picofme" alt="Picture of Me" />
            <h1 className="reveal-text">
              <strong>Zackery Hengartner</strong>
            </h1>
            <h2 className="my-status"><em>Electrical Engineer Co-op @ Emerson | Undergrad Student @ Utoledo</em></h2>
          </div>

          <div className="about-section">
            <p><em>Hint: Hover Over Logo</em></p>
            <img src={toledoLogo} className="logoToledo" alt="Toledo logo" />
            <p className="About-Me-Text">
              I currently attend the <strong>University of Toledo</strong>, studying Computer Science & Engineering. The CSE program is in partnership with <strong>LCCC </strong>
              and allows me to take my classes from a satellite campus in North Ridgeville
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="page bg2">
        <div className="page-inner">
          <div className="skill-section">
            <h1 className="skills-header">Skills: (Programming Languages, Software, IDEs & Tools)</h1>
            <h2 className="coding-lang">Coding Languages:</h2>
            <div class ="img-grid">
              <img src={javaLogo} className ="img1" alt="javaLogo" />
              <img src={cLogo} className ="img4" alt="cLogo" />
              <img src={cplusplusLogo} className ="img5" alt="cplusplusLogo" />
              <img src={pythonLogo} className ="img7" alt="pythonLogo" />

              <img src={htmlLogo} className ="img3" alt="htmlLogo" />
              <img src={cssLogo} className ="img2" alt="cssLogo" />
              <img src={powerShell} className ="img6" alt="powerShell" />
              <img src={bashLogo} className ="img8" alt="bashLogo" />
            </div>

            <h2 className="coding-lang">Tools & IDEs:</h2>
            <div class ="img-grid2">
              <img src={vs2022} className ="img1-2" alt="vs2022" />
              <img src={vsCode} className ="img2-2" alt="vsCode" />
              <img src={eclipseLogo} className ="img3-2" alt="eclipseLogo" />

              <img src={azureDevops} className ="img4-2" alt="azureDevops" />
              <img src={gitLogo} className ="img5-2" alt="gitLogo" />
              <img src={mplabLogo} className ="img6-2" alt="mplabLogo" />
            </div>

            <h2 className="coding-lang">Software:</h2>
            <div class ="img-grid3">
              <img src={altiumLogo} className ="img1-3" alt="altiumLogo" />
              <img src={ltspiceLogo} className ="img2-3" alt="ltspiceLogo" />
              <img src={matlabLogo} className ="img3-3" alt="matlabLogo" />
            </div>

            {/* <nav className="menu">
              <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" />
              <label className="menu-open-button" htmlFor="menu-open">
                <p className="internal-text"><strong>Languages</strong></p>
              </label>

              <img className="menu-item red" src={pythonLogo} alt="Python" />
              <img className="menu-item orange" src={javaLogo} alt="Java" />
              <img className="menu-item gold" src={cLogo} alt="C" />
              <img className="menu-item green" src={cplusplusLogo} alt="C++" />
              <img className="menu-item blue" src={htmlLogo} alt="HTML" />
              <img className="menu-item indigo" src={cssLogo} alt="CSS" />
            </nav> */}

            <p><strong>Programming Languages:</strong> Java, JavaScript, Python, C++, C, HTML, CSS, SQL, x86, ARM, Bash, PowerShell</p>
            <p><strong>Tools & IDEs:</strong> Eclipse, Visual Studios 2022, VS Code, IAR Workbench, Git, Azure Devops, MPLAB</p>
            <p><strong>Software:</strong> Microsoft Office Suite, Adobe Creative Cloud, Altium, LTspice, MATLAB</p>
          </div>
        </div>
      </section>

      <section id="projects" className="page bg3">
        <div className="page-inner">
          <div className="projects-section">
            <h1 className="projects-header">Projects</h1>
          </div>
        </div>
      </section>

      <section id="socials" className="page bg4">
        <div className="page-inner">
          <div className="social-links">
            <a href="https://github.com/zackhengartner" target="_blank" rel="noreferrer">
              <img src={githubLogo} className="logo" alt="Github logo" />
            </a>
            <a href="https://www.linkedin.com/in/zackery-hengartner/" target="_blank" rel="noreferrer">
              <img src={linkedInLogo} className="logo linkedIn" alt="LinkedIn logo" />
            </a>
            <p className="reach-out">Places To Find Me!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
