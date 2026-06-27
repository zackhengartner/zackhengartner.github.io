import toledoLogo from "./assets/toledo-logo.png";
import githubLogo from "./assets/git_hub_logo.png";
import linkedInLogo from "./assets/LinkedIn_Logo.png";

//Coding Languages Logos
import pythonLogo from "./assets/pythonLogo.png";
import javaLogo from "./assets/javaLogo.png";
import cLogo from "./assets/cLogo.png";
import cplusplusLogo from "./assets/cplusplusLogo.png";
import csharpLogo from "./assets/csharpLogo.png";
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
import resumePic from "./assets/resumePNG.png";

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

//Experience Logos
import emersonLogo from "./assets/emersonLogo.png";
import uhmLogo from "./assets/uhmLogo.png";
import lcccLogo from "./assets/lcccLogo.png";

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

  const images = carouselRef.current.querySelectorAll("img");

  let loadedImages = 0;

  const handleImageLoad = () => {
    loadedImages++;

    if (loadedImages === images.length) {
      flkty.resize();
      flkty.reposition();
    }
  };

  images.forEach((img) => {
    if (img.complete) {
      handleImageLoad();
    } else {
      img.addEventListener("load", handleImageLoad);
    }
  });

  window.addEventListener("resize", () => {
    flkty.resize();
    flkty.reposition();
  });

  return () => {
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
        <div className="page-inner skills-inner">
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
                  <p>Learned and used during my time at Emerson while working on the firmware for product development</p>
                </div>

                <div className ="img5">
                  <img src={cplusplusLogo} alt="cplusplusLogo" />
                  <p>My most skilled & favorite programming lanugage. Learned during my coursework.</p>
                </div>

                <div className ="img3">
                  <img src={csharpLogo} alt="csharpLogo" />
                  <p>Learned during my work on full-stack development projects at Union Home Mortgage</p>
                </div>

                <div className ="img7">
                  <img src={pythonLogo} alt="pythonLogo" />
                  <p>Used for my personal projects, most notably my automated job application program</p>
                </div>

                <div className ="img8">
                  <img src={bashLogo} alt="bashLogo" />
                  <p>Gained experience through pipelines for an automation project at Emerson</p>
                </div>

                <div className ="img3">
                  <img src={htmlLogo} alt="htmlLogo" />
                  <p>One of my most recent languages. Used it to make this website you're currently looking at!</p>
                </div>

                <div className ="img2">
                  <img src={cssLogo} alt="cssLogo" />
                  <p>Similarly to html, learned for the purpose of web dev so I could make my own portfolio</p>
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
                  <p>Gained lots of experience in VS Code from personal projects using Python. Used for writing C/C++ at Emerson</p>
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
              <p><strong>Programming Languages:</strong> Java, JavaScript, Python, C#, C++, C, HTML, CSS, SQL, x86, ARM, Bash, PowerShell</p>
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
        <div className="page-inner special-inner">
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

              <div className="carousel-cell">
                <img src={resumePic} alt="AI Resume Tailor" />
                <h2>AI Resume Tailor</h2>
                <p>Built an AI-driven resume tailoring system leveraging Llama 3 via Groq API with a FastAPI backend and React frontend to parse PDFs, extract structured data, and generate job-specific optimized resumes with match scoring; deployed at https://resume-tailor-frontend-henna.vercel.app/</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="travels" className="page bg4">
        <div className="page-inner special-inner">
          <div className="travel-section">
            <h1 className="travel-header">Travels</h1>
            <div className="travel-intro">
              <p>Something about me is I am really into travel! I love the adventure of going to new places and have a lot of places I want to visit.</p>
              <p>Below is a map of some of the places I have visited! I hope to continously update it as I explore more of the world.</p>
            </div>
            <Map className="Map" />
            <h2>Travel Photos:</h2>
            <div className="travel-carousel" ref={travelRef}>
              <figure className="travel-cell polaroid">
                <img src={travel13} alt="Sensō-ji" />
                <figcaption>Sensō-ji</figcaption>
              </figure>

              <figure className="travel-cell polaroid">
                <img src={travel12} alt="Shibuya Crossing" />
                <figcaption>Shibuya Crossing</figcaption>
              </figure>

              <figure className="travel-cell polaroid">
                <img src={travel11} alt="Near Ōtsuka Station" />
                <figcaption>Near Ōtsuka Station</figcaption>
              </figure>

              <figure className="travel-cell polaroid">
                <img src={travel9} alt="Key Largo, Florida" />
                <figcaption>Key Largo, Florida</figcaption>
              </figure>

              <figure className="travel-cell polaroid">
                <img src={travel8} alt="Key Largo, Florida" />
                <figcaption>Key Largo, Florida</figcaption>
              </figure>

              <figure className="travel-cell polaroid">
                <img src={travel7} alt="Mt Fuji" />
                <figcaption>Mt Fuji</figcaption>
              </figure>

              <figure className="travel-cell polaroid">
                <img src={travel6} alt="Arakurayama Sengen Park" />
                <figcaption>Arakurayama Sengen Park</figcaption>
              </figure>

              <figure className="travel-cell polaroid">
                <img src={travel1} alt="Key Largo, Florida" />
                <figcaption>Key Largo, Florida</figcaption>
              </figure>

              <figure className="travel-cell polaroid">
                <img src={travel2} alt="Key Largo, Florida" />
                <figcaption>Key Largo, Florida</figcaption>
              </figure>

              <figure className="travel-cell polaroid">
                <img src={travel3} alt="Bristow, VA" />
                <figcaption>Bristow, VA</figcaption>
              </figure>

              <figure className="travel-cell polaroid">
                <img src={travel4} alt="Pittsburgh, PA" />
                <figcaption>Pittsburgh, PA</figcaption>
              </figure>

              <figure className="travel-cell polaroid">
                <img src={travel5} alt="New York, NY" />
                <figcaption>New York, NY</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="page bg5">
        <div className="page-inner experience-inner">
          <div className="social-links">
            <h1>Experience</h1>

      <div className="timeline">

        <div className="timeline-item left">
          <div className="timeline-marker"></div>

          <div className="timeline-card">
            <img src={lcccLogo} alt="Lorain County Community College" className="company-logo lccc1" />
            <h2>Lab Assistant</h2>
            <h3>Lorain County Community College</h3>
            <p className="date">Feb 2025 - May 2025</p>

            <ul>
              <li>Ensure students are on task during lab sessions</li>
              <li>Assist with programming problems and debugging</li>
              <li>Monitor lab equipment and maintain a safe environment</li>
            </ul>

            <div className="skills">
              <span>Java</span>
              <span>Problem Solving</span>
              <span>Debugging</span>
              <span>Communication</span>
            </div>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-marker"></div>

          <div className="timeline-card">
            <img src={lcccLogo} alt="Lorain County Community College" className="company-logo lccc2" />
            <h2>Teaching Assistant</h2>
            <h3>Lorain County Community College</h3>
            <p className="date">Aug 2025 - Dec 2025</p>

            <ul>
              <li>Assist students with programming concepts and errors</li>
              <li>Grade assignments and projects</li>
              <li>Provide tutoring during office/lab hours</li>
            </ul>

            <div className="skills">
              <span>C++</span>
              <span>OOP</span>
              <span>Communication</span>
              <span>Tutoring</span>
              <span>Mentorship</span>
            </div>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-marker"></div>

          <div className="timeline-card">
            <img src={emersonLogo} alt="Emerson" className="company-logo emerson" />
            <h2>Electrical Engineering Co-op</h2>
            <h3>Emerson</h3>
            <p className="date">Jan 2026 - Apr 2026</p>

            <ul>
              <li>Implement embedded device functionality in C/C++</li>
              <li>Use Azure Pipelines to automate documentation and workflows</li>
              <li>Perform testing and data collection for product validation</li>
            </ul>

            <div className="skills">
              <span>C</span>
              <span>C++</span>
              <span>Embedded Systems</span>
              <span>Azure DevOps</span>
              <span>Scripting</span>
            </div>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-marker"></div>

          <div className="timeline-card">
            <img src={uhmLogo} alt="Union Home Mortgage" className="company-logo uhm" />
            <h2>IT Software Dev Intern</h2>
            <h3>Union Home Mortgage</h3>
            <p className="date">May 2026 - Aug 2026</p>

            <ul>
              <li>Develop full-stack applications using .NET</li>
              <li>Work with team using agile workflow methodologies</li>
              <li>Work with cross-functional teams to evolve software solutions</li>
            </ul>

            <div className="skills">
              <span>.NET</span>
              <span>C#</span>
              <span>SQL</span>
              <span>Scrum</span>
              <span>Azure Devops</span>
            </div>
          </div>
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
