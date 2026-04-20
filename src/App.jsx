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

//Project Logos
import webDev from "./assets/webdev.png";
import automation from "./assets/automation.png";
import compressor from "./assets/comp.png";
import database from "./assets/database.png";
import graphtheory from "./assets/graphtheory.png";
import reverseEngineering from "./assets/reverseEngineering.png";



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
        <a href="#experience">Experience</a>
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
              I currently attend the <strong>University of Toledo</strong>, studying Computer Science & Engineering. My CSE program is in partnership with <strong>LCCC </strong>
              and allows me to take my classes from a satellite campus in North Ridgeville
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="page bg2">
        <div className="page-inner">
          <div className="skill-section">
            <h1 className="skills-header">Skills: (Programming Languages, Software, IDEs & Tools)</h1>
            <div className="grid appear">
              <h2 className="coding-lang">Coding Languages:</h2>
              <div className ="img-grid">
                <div className ="img1">
                  <img src={javaLogo} alt="javaLogo" />
                  <p>My first programming language. Used it to learn OOP and data structures</p>
                </div>
                <div className ="img4">
                  <img src={cLogo} alt="cLogo" />
                  <p>Learned and used at my time at Emerson while working on the firmware for product development</p>
                </div>

                <div className ="img5">
                  <img src={cplusplusLogo} alt="cplusplusLogo" />
                  <p>My most used & favorite programming lanugage. Picked up during my non-linear data structures course</p>
                </div>

                <div className ="img7">
                  <img src={pythonLogo} alt="pythonLogo" />
                  <p>Used for my personal projects, most notably my automated job application program</p>
                </div>

                <div className ="img3">
                  <img src={htmlLogo} alt="htmlLogo" />
                  <p>One of my most recent languages. Used it to make this website you're currently looking at!</p>
                </div>

                <div className ="img2">
                  <img src={cssLogo} alt="cssLogo" />
                  <p>Similarly to html, learned for the purpose of web dev so I could make my own portfolio</p>
                </div>

                <div className ="img6">
                  <img src={powerShell} alt="powerShell" />
                  <p>Gained knowledge scripting for an Azure Pipeline I worked on while at Emerson</p>
                </div>

                <div className ="img8">
                  <img src={bashLogo} alt="bashLogo" />
                  <p>Alike PowerShell, gained experience through pipelines for an automation project at Emerson</p>
                </div>

              </div>
            </div>
            
            <div className ="grid appear">
              <h2 className="coding-lang">Tools & IDEs:</h2>
              <div className ="img-grid2">

                <div className ="img1-2">
                  <img src={vs2022} className ="vs2022" alt="vs2022" />
                  <p>My most used IDE. Gained lots of experience throughout coursework and personal projects mainly using C++</p>
                </div> 

                <div className ="img2-2">
                  <img src={vsCode} className ="vsCode" alt="vsCode" />
                  <p>Gained lots of experience in VS Code from personal projects using Python. Currently use for writing C at Emerson</p>
                </div>

                <div className="img3-2">
                  <img src={eclipseLogo} className ="eclipseLogo" alt="eclipseLogo" />
                  <p>My first ever IDE that I was introduced to through my coursework. Used primarily with Java up until non-linear data structures</p>
                </div>

                <div className ="img4-2">
                  <img src={azureDevops} alt="azureDevops" />
                  <p>Introduced to while working at Emerson. I commonly used it for making pipelines, storing remote repos, and tracking work tasks</p>
                </div>

                <div className ="img5-2">
                  <img src={gitLogo} alt="gitLogo" />
                  <p>Also introduced to while working at Emerson. Something I quickly started using for my personal projects. So very useful!</p>
                </div>

                <div className ="img6-2">
                  <img src={mplabLogo}  alt="mplabLogo" />
                  <p>Used to program target boards during product development at Emerson. Very useful and rather easy to navigate UI</p>
                </div>

              </div>
            </div>
            <div className ="grid appear">
              <h2 className="coding-lang">Software:</h2>
              <div class ="img-grid3">
                <div className ="img1-3">
                  <img src={altiumLogo} alt="altiumLogo" />
                  <p>Trained to use while working at Emerson. Lots of fun learning to build schematics and make PCB layouts</p>
                </div>

                <div className ="img2-3">
                  <img src={ltspiceLogo} alt="ltspiceLogo" />
                  <p>Used predominantly throughout my coursework. Most commonly during Circuits and Electronics</p>
                </div>

                <div className ="img3-3">
                  <img src={matlabLogo} alt="matlabLogo" />
                  <p>Was introduced to during my coursework and further experience from the Arduino Engineering Kit</p>
                </div>
                
              </div>
            </div>

            <div className="fadeMove">
              <p><strong>Programming Languages:</strong> Java, JavaScript, Python, C++, C, HTML, CSS, SQL, x86, ARM, Bash, PowerShell</p>
              <p><strong>Tools & IDEs:</strong> Eclipse, Visual Studios 2022, VS Code, IAR Workbench, Git, Azure Devops, MPLAB</p>
              <p><strong>Software:</strong> Microsoft Office Suite, Adobe Creative Cloud, Altium, LTspice, MATLAB</p>
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
          </div>
        </div>
      </section>

      <section id="projects" className="page bg3">
        <div className="page-inner">
          <div className="projects-section">
            <h1 className="projects-header">Projects</h1>
            <div className ="all-cards">

              <div className ="proj1 card">
                <img src = {webDev} className="webLogo" />
                <div className="container">
                  <h2><strong>Portfolio</strong></h2>
                  <p>Developed this website that you see infront of you, using HTML, CSS, and JavaScript!</p>
                </div>
              </div>

              <div className ="proj2 card">
                <img src = {automation} className="automation" />
                <div className="container">
                  <h2><strong>Application Automation</strong></h2>
                  <p>Developed a python script which uses the playwright extension to allow for job applications to be automated if they are filled out using the workday platform </p>
                </div>
              </div>

              <div className ="proj3 card">
                <img src = {compressor} className="compressor" />
                <div className="container">
                  <h2><strong>Huffman Tree Encoder/Decoder</strong></h2>
                  <p>Created a program that implements Huffman trees to encode and decode command line given input files allowing for up to 70% file size reduction</p>
                </div>
              </div>

              <div className ="proj4 card">
                <img src = {database} className="database" />
                <div className="container">
                  <h2><strong>Internships/Co-op Database using SQLite</strong></h2>
                  <p>Designed a program using SQLite to manage a database for co-ops/internships which demonstrates core SQL operations (SORT, SELECT, CREATE, etc.) </p>
                </div>
              </div>

              <div className ="proj5 card">
                <img src = {reverseEngineering} className="reverseEngineering" />
                <div className="container">
                  <h2><strong>Zackmophobia</strong></h2>
                  <p>Conducted reverse engineering analysis on Phasmophobia to create a dll which when injected, hooks into the game's functions and modifies different behavior</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="page bg4">
        <div className="page-inner">
          <div className="social-links">
            <h1>Experience</h1>

            <div className="jobs">
              <div class="notification">
                <div class="Emerson"></div>
                <div class="notiborderglow"></div>
                <div class="notititle">Emerson - Electrical Engineering Co-op | Jan 2026 - Apr 2026</div>
                <div class="notibody">Implement embedded device functionality in C for new product development</div>
                <div class="notibody">Utilize Azure Pipelines with Ruby and Bash scripts to automate document generation</div>
                <div class="notibody">Perform testing and data collection for product validation</div>
              </div>

              <div class="notification">
                <div class="Emerson"></div>
                <div class="notiborderglow"></div>
                <div class="notititle">LCCC - Teaching Assistant | Aug 2025 - Dec 2025</div>
                <div class="notibody">Assist students with solving programming errors</div>
                <div class="notibody">Test and grade students submitted assignments</div>
                <div class="notibody">Tutor students that come in during tutoring hours</div>
              </div>

              <div class="notification">
                <div class="Emerson"></div>
                <div class="notiborderglow"></div>
                <div class="notititle">LCCC - Lab Assistant | Feb 2025 - May 2025</div>
                <div class="notibody">Ensure students are on task and making use of the time given to them during lab</div>
                <div class="notibody">Help students with programming problems they encounter</div>
                <div class="notibody">Safeguard/monitor the lab to prevent destruction to expensive equipment</div>
              </div>
            </div>
              

            <div className ="footer">
              <a href="https://github.com/zackhengartner" target="_blank" rel="noreferrer">
              <img src={githubLogo} className="logo" alt="Github logo" />
              </a>
              <a href="https://www.linkedin.com/in/zackery-hengartner/" target="_blank" rel="noreferrer">
                <img src={linkedInLogo} className="logo linkedIn" alt="LinkedIn logo" />
              </a>
              <p className="reach-out">Places To Find Me!</p>
              <a href="https://docs.google.com/document/d/1RfPMLSREV4rFeBKzbb2UuF9oLAcGmmhJ7L4Ys8Jw_GY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" >
              Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
