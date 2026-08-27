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
import rubyLogo from "./assets/rubyLogo.svg";
import sqlLogo from "./assets/sqlLogo.svg";

//Tools/IDEs Logos
import vs2022 from "./assets/vs2022.png";
import vsCode from "./assets/vsCode.png";
import eclipseLogo from "./assets/eclipseLogo.png";
import azureDevops from "./assets/azureDevops.png";
import gitLogo from "./assets/gitLogo.png";
import mplabLogo from "./assets/mplabLogo.png";
import dockerLogo from "./assets/dockerLogo.svg";
import postmanLogo from "./assets/postmanLogo.svg";
import azureLogo from "./assets/azureLogo.svg";

//Frameworks & Libraries Logos
import reactLogo from "./assets/reactLogo.svg";
import dotnetLogo from "./assets/dotnetLogo.svg";
import blazorLogo from "./assets/blazorLogo.svg";
import fastapiLogo from "./assets/fastapiLogo.svg";
import pytorchLogo from "./assets/pytorchLogo.svg";
import numpyLogo from "./assets/numpyLogo.svg";
import scikitLogo from "./assets/scikitLogo.svg";
import huggingfaceLogo from "./assets/huggingfaceLogo.svg";
import playwrightLogo from "./assets/playwrightLogo.svg";

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
import docExtraction from "./assets/reverseEngineering.png";

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
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

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

    const handleResize = () => {
      flkty.resize();
      flkty.reposition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      images.forEach((img) => img.removeEventListener("load", handleImageLoad));
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
      draggable: true,
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
      <nav className={`main-Nav${navOpen ? " is-open" : ""}`}>
        <button
          type="button"
          className="nav-toggle"
          aria-label={navOpen ? "Close menu" : "Open menu"}
          aria-expanded={navOpen}
          onClick={() => setNavOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="nav-links">
          <a href="#about" onClick={closeNav}>About Me</a>
          <a href="#skills" onClick={closeNav}>Skills</a>
          <a href="#projects" onClick={closeNav}>Projects</a>
          <a href="#travels" onClick={closeNav}>Travels</a>
          <a href="#experience" onClick={closeNav}>Experience</a>
        </div>
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
              I currently attend the <strong>University of Toledo</strong>, working toward a B.S. in Computer Science & Engineering (expected <strong>Dec 2027</strong>) with a <strong>3.79 GPA</strong>. My CSE program is in partnership with <strong>LCCC </strong>
              &mdash; where I earned my Associate of Arts & Science with a 3.89 GPA &mdash; and allows me to take my classes from a satellite campus in North Ridgeville
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
                  <p>Used at Emerson to write production embedded firmware for a Greenlee high voltage testing product</p>
                </div>

                <div className ="img5">
                  <img src={cplusplusLogo} alt="cplusplusLogo" />
                  <p>My most skilled & favorite programming lanugage. Learned during my coursework and taught it as a TA at LCCC</p>
                </div>

                <div className ="img3">
                  <img src={csharpLogo} alt="csharpLogo" />
                  <p>Used at Union Home Mortgage to build full-stack applications with .NET, ASP.NET Core, and Blazor</p>
                </div>

                <div className ="img7">
                  <img src={pythonLogo} alt="pythonLogo" />
                  <p>My go-to for AI/ML work — PyTorch transformers, FastAPI backends, and Playwright automation</p>
                </div>

                <div className ="img8">
                  <img src={bashLogo} alt="bashLogo" />
                  <p>Used alongside Ruby in Azure Pipelines to automate firmware release documentation at Emerson</p>
                </div>

                <div className ="img3">
                  <img src={htmlLogo} alt="htmlLogo" />
                  <p>One of my most recent languages. Used it to make this website you&apos;re currently looking at!</p>
                </div>

                <div className ="img2">
                  <img src={cssLogo} alt="cssLogo" />
                  <p>Similarly to html, learned for the purpose of web dev so I could make my own portfolio</p>
                </div>

                <div className ="img6">
                  <img src={javaScript} alt="javaScriptLogo" />
                  <p>Learned alongside html and css for web dev, and used it to bring this portfolio to life</p>
                </div>

                <div className ="img1">
                  <img src={sqlLogo} alt="sqlLogo" />
                  <p>Used to design my internship database project, and for querying data while building full-stack apps</p>
                </div>

                <div className ="img5">
                  <img src={rubyLogo} alt="rubyLogo" />
                  <p>Picked up at Emerson to write the Azure Pipeline scripts that auto-generate firmware release docs</p>
                </div>

                <div className ="img4">
                  <img src={powerShell} alt="powerShellLogo" />
                  <p>My go-to for quick Windows scripting and automating the repetitive parts of my dev workflow</p>
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
                  <p>My daily driver for Python and AI projects. Also used for writing C/C++ at Emerson</p>
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

                <div className ="img1-2">
                  <img src={dockerLogo} alt="dockerLogo" />
                  <p>Used to containerize projects so they run the same way on my machine as they do anywhere else</p>
                </div>

                <div className ="img2-2">
                  <img src={postmanLogo} alt="postmanLogo" />
                  <p>Used at Union Home Mortgage to design, test, and validate RESTful API endpoints before wiring them up</p>
                </div>

                <div className ="img3-2">
                  <img src={azureLogo} alt="azureLogo" />
                  <p>The cloud side of my work. Used for pipelines and services alongside Azure DevOps at Emerson and UHM</p>
                </div>

              </div>
            </div>

            <div className ="grid appear">
              <h2 className="coding-lang">Frameworks & Libraries:</h2>
              <div className ="img-grid2">

                <div className ="img1-2">
                  <img src={dotnetLogo} alt="dotnetLogo" />
                  <p>The backbone of my work at Union Home Mortgage, building full-stack apps with C# and ASP.NET Core</p>
                </div>

                <div className ="img2-2">
                  <img src={blazorLogo} alt="blazorLogo" />
                  <p>Used at UHM to build interactive front ends in C# for internal and customer-facing applications</p>
                </div>

                <div className ="img3-2">
                  <img src={reactLogo} alt="reactLogo" />
                  <p>My frontend of choice. Used at UHM and for the interface of my AI Resume Tailor project</p>
                </div>

                <div className ="img4-2">
                  <img src={fastapiLogo} alt="fastapiLogo" />
                  <p>Powers the Python backend of my AI Resume Tailor, serving the parsing and tailoring endpoints</p>
                </div>

                <div className ="img5-2">
                  <img src={pytorchLogo} alt="pytorchLogo" />
                  <p>Used to build a decoder-only transformer from scratch, attention blocks and training loop included</p>
                </div>

                <div className ="img6-2">
                  <img src={numpyLogo} alt="numpyLogo" />
                  <p>The workhorse behind the array and tensor math in my machine learning projects</p>
                </div>

                <div className ="img1-2">
                  <img src={scikitLogo} alt="scikitLearnLogo" />
                  <p>My starting point for classic ML workflows, training and evaluating models on real datasets</p>
                </div>

                <div className ="img2-2">
                  <img src={huggingfaceLogo} alt="huggingFaceLogo" />
                  <p>Where I pull models and tooling from when experimenting with transformers and fine-tuning</p>
                </div>

                <div className ="img3-2">
                  <img src={playwrightLogo} alt="playwrightLogo" />
                  <p>Drives my job application automation, scraping and filling out Workday forms page by page</p>
                </div>

              </div>
            </div>
            <div className ="grid appear">
              <h2 className="coding-lang">Software:</h2>
              <div className="img-grid3">
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
              <p><strong>Programming Languages:</strong> Python, C, C++, C#, JavaScript, SQL, Bash, Ruby, PowerShell, HTML, CSS, x86, ARM</p>
              <p><strong>Frameworks & Libraries:</strong> .NET, ASP.NET Core, Blazor, React, FastAPI, PyTorch, NumPy, Scikit-Learn, LangGraph, HuggingFace, Playwright</p>
              <p><strong>AI & Machine Learning:</strong> Deep Learning, Transformers, OCR, RAG, PEFT</p>
              <p><strong>Tools & IDEs:</strong> Visual Studios 2022, VS Code, Eclipse, IAR Workbench, Git, Azure DevOps, Docker, CI/CD, Postman, MPLAB</p>
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
                <img src={graphtheory} alt="GPT From Scratch" />
                <h2>GPT From Scratch</h2>
                <p>Implemented a decoder-only transformer from scratch in PyTorch: multi-head causal self-attention, positional embeddings, layer norm, residual blocks, and the full training loop. Trained 0.8M and 10.8M parameter models on 1.1M characters of Shakespeare, where they learned English spelling, grammar, and dialogue formatting purely from predicting one character at a time</p>
              </div>

              <div className="carousel-cell">
                <img src={docExtraction} alt="AI Document Extraction" />
                <h2>AI Document Extraction</h2>
                <p>Designed a schema-driven document extraction pipeline using GPT-5.6 Luna with PDF parsing and OCR fallback, tracking cost and performance statistics while achieving 96% cross-field accuracy. Used gold-label data for evaluation and an evidence-or-review structure to help automate the mortgage process</p>
              </div>

              <div className="carousel-cell">
                <img src={resumePic} alt="AI Resume Tailor" />
                <h2>AI Powered Resume Tailor</h2>
                <p>Built a full-stack resume tailoring app that uses the Groq API to surface the most relevant experience and suggest additional fields, extracting original resume data with pypdf and an OCR fallback through Tesseract. Runs on a Python and FastAPI backend with a React frontend; deployed at https://airesumetailor.co/</p>
              </div>

              <div className="carousel-cell">
                <img src={automation} alt="Automation" />
                <h2>Application Automation</h2>
                <p>Developed a Python script which uses Playwright to scrape the frontend of the Workday platform and automate the job application process by filling out fields for every page, pairing a hard-wired page-by-page script with a Groq API LLM fallback that analyzes each page for missing information and validates completed fields</p>
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
                <p>Conducted reverse engineering analysis on Phasmophobia to create a dll which when injected, hooks into the game&apos;s functions and modifies different behavior</p>
              </div>

              <div className="carousel-cell">
                <img src={webDev} alt="Portfolio" />
                <h2>Portfolio</h2>
                <p>Developed this website that you see infront of you, using HTML, CSS, and JavaScript!</p>
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
              <li>Kept students on task and supported during lab sessions</li>
              <li>Assisted with programming problems and debugging</li>
              <li>Monitored lab equipment and maintained a safe environment</li>
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
              <li>Supported students struggling with programming errors in an object-oriented C++ class</li>
              <li>Tutored students after class to improve homework and exam scores with coding and studying strategies</li>
              <li>Coordinated with the professor to gameplan exams, work structure, and course activities</li>
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
              <li>Developed production embedded firmware in C/C++ for a Greenlee high voltage testing product</li>
              <li>Automated firmware release documentation using Azure Pipelines with Ruby and Bash scripts</li>
              <li>Conducted systematic testing and data collection to validate product performance</li>
            </ul>

            <div className="skills">
              <span>C</span>
              <span>C++</span>
              <span>Embedded Firmware</span>
              <span>Azure Pipelines</span>
              <span>Ruby</span>
              <span>Bash</span>
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
              <li>Developed full-stack applications using C#, .NET, ASP.NET Core, Blazor, and React</li>
              <li>Contributed to the AI team&apos;s document extraction efforts to automate information gathering</li>
              <li>Designed, tested, and validated RESTful API endpoints using Postman</li>
            </ul>

            <div className="skills">
              <span>C#</span>
              <span>.NET</span>
              <span>Blazor</span>
              <span>React</span>
              <span>REST APIs</span>
              <span>Postman</span>
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
