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
import picofme from "./assets/hsreal3.jpg";
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
import dllinjection from "./assets/dllinjection.png";

//Travel Photos
import travel1 from "./assets/travel1.jpg";
import travel2 from "./assets/travel2.jpg";
import travel3 from "./assets/travel3.jpg";
import travel4 from "./assets/travel4.jpg";
import travel5 from "./assets/travel5.jpg";
import travel6 from "./assets/travel6.jpg";
import travel7 from "./assets/travel7.jpg";
import travel8 from "./assets/travel8.jpg";
import travel9 from "./assets/travel9.jpg";
import travel10 from "./assets/travel10.jpg";
import travel11 from "./assets/travel11.jpg";
import travel12 from "./assets/travel12.jpg";
import travel13 from "./assets/travel13.jpg";

//Map for travel page
import Map from "./assets/Map.jsx";

//Card Carousel
import { useState, useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

import "./App.css";

export default function App() {
  const carouselRef = useRef(null);
  const travelRef = useRef(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    const flkty = new Flickity(carouselRef.current, {
      cellAlign: "center",
      contain: true,
      wrapAround: true,
      pageDots: true,
      prevNextButtons: true,
      draggable: true,
      adaptiveHeight: true
    });

    setTimeout(() => flkty.resize(), 50);

    const handleResize = () => flkty.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      flkty.destroy();
    };
  }, []);

  useEffect(() => {
    if (!travelRef.current) return;

    const flkty = new Flickity(travelRef.current, {
    cellAlign: "center",
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
    draggable: false,
    adaptiveHeight: true,
    autoPlay: 3000,
    selectedAttraction: 0.01,
    friction: 0.15,
    pauseAutoPlayOnHover: false
  });

    setTimeout(() => flkty.resize(), 50);

    flkty.on("pointerDown", () => {
    flkty.playPlayer();
  });

    const handleResize = () => flkty.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      flkty.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <nav className="main-Nav">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#travels">Travels</a>
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
            <h2 className="my-status"><em>Software Dev Intern @ UHM | Undergrad Student @ Utoledo</em></h2>
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

            <div className="carousel" ref={carouselRef}>

              <div className="carousel-cell">
                <img src={webDev} alt="Portfolio" />
                <h2>Portfolio</h2>
                <p>Developed this website that you see infront of you, using HTML, CSS, and JavaScript!</p>
              </div>

              <div className="carousel-cell">
                <img src={automation} alt="Automation" />
                <h2>Application Automation</h2>
                <p>Developed a python script which uses the playwright extension to allow for job applications to be automated if they are filled out using the workday platform</p>
              </div>

              <div className="carousel-cell">
                <img src={compressor} alt="Huffman" />
                <h2>Huffman Encoder/Decoder</h2>
                <p>Created a program that implements Huffman trees to encode and decode command line given input files allowing for up to 70% file size reduction</p>
              </div>

              <div className="carousel-cell">
                <img src={database} alt="Database" />
                <h2>SQLite Internship DB</h2>
                <p>Designed a program using SQLite to manage a database for co-ops/internships which demonstrates core SQL operations (SORT, SELECT, CREATE, etc.)</p>
              </div>

              <div className="carousel-cell">
                <img src={dllinjection} alt="DLL Project" />
                <h2>Zackmophobia</h2>
                <p>Conducted reverse engineering analysis on Phasmophobia to create a dll which when injected, hooks into the game's functions and modifies different behavior</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="travels" className="page bg4">
        <div className="page-inner">
          <div className="travel-section">
            <h1 className="travel-header">Travels</h1>
            <p>Something about me is I am really into travel! I love the adventure of going to new places and have a lot of places I want to visit.</p>
            <p>Below is a map of some of the places I have visited! I hope to continously update it as I explore more of the world.</p>
            <Map />
            <h2>Travel Photos:</h2>
            <div className="travel-carousel" ref={travelRef}>

              <div className="travel-cell">
                <img src={travel13} alt="Tokyo" />
                <h3>Sensō-ji</h3>
              </div>

              <div className="travel-cell">
                <img src={travel12} alt="Tokyo" />
                <h3>Shibuya Crossing</h3>
              </div>

              <div className="travel-cell">
                <img src={travel11} alt="Tokyo" />
                <h3>Near Ōtsuka Station</h3>
              </div>

              <div className="travel-cell">
                <img src={travel9} alt="Tokyo" />
                <h3>Key Largo, Florida</h3>
              </div>

              <div className="travel-cell">
                <img src={travel8} alt="Tokyo" />
                <h3>Key Largo, Florida</h3>
              </div>

              <div className="travel-cell">
                <img src={travel7} alt="Tokyo" />
                <h3>Mt Fuji</h3>
              </div>

              <div className="travel-cell">
                <img src={travel6} alt="Tokyo" />
                <h3>Arakurayama Sengen Park</h3>
              </div>
              
              <div className="travel-cell">
                <img src={travel1} alt="Tokyo" />
                <h3>Key Largo, Florida</h3>
              </div>

              <div className="travel-cell">
                <img src={travel2} alt="Zakopane" />
                <h3>Key Largo, Florida</h3>
              </div>

              <div className="travel-cell">
                <img src={travel3} alt="City" />
                <h3>Bristow, VA</h3>
              </div>

              <div className="travel-cell">
                <img src={travel4} alt="City" />
                <h3>Pittsburgh, PA</h3>
              </div>

              <div className="travel-cell">
                <img src={travel5} alt="City" />
                <h3>New York, NY</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="page bg5">
        <div className="page-inner">
          <div className="social-links">
            <h1>Experience</h1>

            <div className="jobs">

              <div class="notification">
                <div class="Union Home Mortgage"></div>
                <div class="notiborderglow"></div>
                <div class="notititle">Union Home Mortgage - IT Software Development Intern | May 2026 - Aug 2026</div>
                <div class="notibody">Develop full-stack applications using .NET framework</div>
                <div class="notibody">Collaborate with software development team using agile workflow methodologies</div>
                <div class="notibody">Work with cross-functional teams to align software solutions with company needs</div>
              </div>

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
              <a href="https://docs.google.com/presentation/d/1kYS8oKpc7OWGy4BNADh6YTvQs65WRyoBEOvDxogc5uk/edit?usp=sharing" target="_blank" rel="noopener noreferrer" >
              Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
