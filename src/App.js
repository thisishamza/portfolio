import React, { useState } from "react";
import Particles from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGooglePlusG,faLinkedinIn,faGithub, faReact, faNode,  faCss3,  faHtml5,  faJs,  faDrupal} from "@fortawesome/free-brands-svg-icons";
import {faDownload,faChevronCircleDown} from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline,VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./App.css";

const postgres = require("./images/postgresql.png");
const resume = require("./resume/Resume_Fahad_Israr_May_2019.pdf");
let particleconfig = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

function App() {
  const [view1, toggle1] = useState(0);
  const [view2, toggle2] = useState(0);
  const [view3, toggle3] = useState(0);
  const [view4, toggle4] = useState(0);
  const [view5, toggle5] = useState(0);
  const [view6, toggle6] = useState(0);

  return (
    <div className="App">
      {/*-------------Particle based Display-----------------*/}
      <div id="particle-container">
        <Particles className="particles" params={particleconfig} />

        <div className="header">
          <h2>
            Muhammad 
            <br />
            Hamza
          </h2>
          <h3>Software Engineer</h3>
          <div className="icon-container">
            <a
              title="Google"
              className="fa"
              href="mailto:f168345@nu.edu.pk"
              target="new"
            >
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a
              title="Linkedin"
              className="fa"
              href="https://www.linkedin.com/in/muhammadhamza10"
              target="new"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              title="Github"
              className="fa2"
              href="https://github.com/thisishamza"
              target="new"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            </div>
          <div className="pagelinks">
            <a className="pagenav" href="#aboutMe">
              About Me
            </a>
            <a className="pagenav" href="#projects">
              Projects
            </a>
            <a className="pagenav" href={resume} download>
              Resume <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
        <a href="#aboutMe" className="down">
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </a>
      </div>
      {/*------------Particle body Ends Here---------------------------*/}

      {/*-------------About Me------------*/}

      <div id="aboutMe" className="about ">
        <h1>About Me</h1>
        <p>
          I am a Js Enthusiast and a Progressive Web App Developer and I love to
          work with React Js [for UI] , Node Js [for Backend] and postgreSQL
          [for DBMS]. Besides, I love Competitive Programming and my most
          preferred language is <b>C++</b>, though <b>Java</b> was my First
          Language. I love to work with Open Source Softwares and also , I love
          to contribute to it. I've worked with Drupal based Content Management
          System as Well and Developed Custom Modules.
        </p>
        <div className="tech">
          <div className="tools">
            <h2>U.I.</h2>
            <div className="tools-icon">
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3} />
              <FontAwesomeIcon icon={faJs} />
            </div>
          </div>

          <div className="web-technologies">
            <h2>P.W.A</h2>
            <div className="web-icons">
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faNode} />
              <img
                src={postgres}
                alt="postgreSql Icon"
                width="120px"
                height="120px"
              />
            </div>
          </div>

          <div className="cms">
            <h2>C.M.S.</h2>
            <img
              src={require("./images/drupal.png")}
              alt="drupal-logo"
              width="150px"
              height="150px"
            />
          </div>
        </div>
      </div>

      {/*------------Work Timeline-------- */}

      <div className="timeline">
        <h1>Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" Aug 2020 - Sep 2021"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faDrupal} />}
          >
            <h1>Techleadz</h1>
            <h1>Software Engineer</h1>
            <p>Working on Django, python </p>
          </VerticalTimelineElement>
          </VerticalTimeline>
      </div>
      {/*------------Projects---------------*/}
      {/* <div id="projects" className="projects">
        <h1>Projects</h1>
        <h2 style={{ maxWidth: "90%" }}>
          Being a Professional , I love to repect the confidentiality with my
          organizations and so I can't flaunt the work I did there.
          <br />
          But, still there's plenty I have to show..... Hope you Like it!!!!{" "}
        </h2>
        <div className="project-content">
          <div
            className="project-item"
            onMouseEnter={() => {
              toggle1(1);
            }}
            onMouseLeave={() => {
              toggle1(0);
            }}
          >
            <h1>IIITT Library</h1>
            <ReactCardFlip isFlipped={view1} flipDirection="horizontal">
              <img
                key="front"
                src={require("./images/library.png")}
                alt="IIITT Library"
              />
              <div className="reverse" key="back">
                <h1>
                  A PWA serving as Library Database Management System For IIIT
                  Trichy
                </h1>
                <h2>Developed with React Js Node Js & postgreSQL</h2>
                <h3>
                  For Testing : Server Deployed on Heroku ,DBMS hosted with
                  Heroku postgeSQL and Front End Hosted with gh-pages
                </h3>
                <p>
                  *Login for Testing: ->Email: library@iiitt.ac.in <br />{" "}
                  ->Password: iiittlibrary
                </p>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle1(!view1)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
               
              </div>
              <div>
                <a href="https://fahad-israr.github.io/iiittlibrary/" target='new'>
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a href="https://github.com/fahad-israr/IIITT-Library-Source-Code--Public" target='new'>
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle2(1);
            }}
            onMouseLeave={() => {
              toggle2(0);
            }}
          >
            <h1>Coherence '19</h1>
            <ReactCardFlip isFlipped={view2} flipDirection="horizontal">
              <img
                key="front"
                src={require("./images/techfest.png")}
                alt="Coherence"
              />
              <div className="reverse" key="back">
                <h1>
                  Website Developed for Annual Technical Fest at IIIT Trichy
                </h1>
                <h1>Coherence:A TECH ODYSSEY</h1>
                <h2>Developed with Vanilla JS</h2>
                <h3>Deployed as Demo On gh-pages</h3>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle2(!view2)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
                
              </div>
              <div>
                <a href="https://fahad-israr.github.io/techfest/" target='new'>
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a href="https://github.com/fahad-israr/techfest" target='new'>
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle3(1);
            }}
            onMouseLeave={() => {
              toggle3(0);
            }}
          >
            <h1>E Cell</h1>
            <ReactCardFlip isFlipped={view3} flipDirection="horizontal">
              <img
                key="front"
                src={require("./images/ecell.png")}
                alt="E Cell"
              />
              <div className="reverse" key="back">
                <h1>
                  A React WebApp intended for Entrepreneur Cell of IIIT Trichy{" "}
                </h1>
                <h1>E-Cell:IIITT</h1>
                <h2>Developed with React Js & Animated with Pure CSS</h2>
                <h3>Deployed as Demo On gh-pages</h3>
                <p>*In Development Stage</p>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle3(!view3)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
                
              </div>
              <div>
                <a href="https://fahad-israr.github.io/ecell/">
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a href="https://github.com/fahad-israr/ecell">
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle4(1);
            }}
            onMouseLeave={() => {
              toggle4(0);
            }}
          >
            <h1>T & P</h1>
            <ReactCardFlip isFlipped={view4} flipDirection="horizontal">
              <img
                key="front"
                src={require("./images/tp.png")}
                alt="T & P"
              />
              <div className="reverse" key="back">
                <h1>
                  Website intended for Training&Placement Cell IIIT Trichy
                </h1>
                <h1>T&P:IIITT</h1>
                <h2>Developed with Vanilla Js and Powered with Bootstrap</h2>
                <h3>Deployed as Demo On gh-pages</h3>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle4(!view4)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
                
              </div>
              <div>
                <a href="https://fahad-israr.github.io/T-and-P-Website/" target='new'>
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a href="https://github.com/fahad-israr/T-and-P-Website" target='new'>
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle5(1);
            }}
            onMouseLeave={() => {
              toggle5(0);
            }}
          >
            <h1>Face Recognizer</h1>
            <ReactCardFlip isFlipped={view5} flipDirection="horizontal">
              <img
                key="front"
                src={require("./images/face.png")}
                alt="IIITT Library"
              />
              <div className="reverse" key="back">
                <h1>
                  A simple App to Detect Human Faces in an Image with Clarifai
                  Api
                </h1>
                <h2>100% PWA as Audited by Google Lighthouse 4.2.0</h2>
                <h2>
                  <a href="https://github.com/fahad00cms/Face_Recognizer/blob/gh-pages/Audit.pdf">
                    Download Audit Report <FontAwesomeIcon icon={faDownload} />{" "}
                  </a>{" "}
                </h2>
                <h3>Deployed as Demo on gh-pages</h3>
                <p>
                  *Login for Testing: ->Email: testing@github.io ->Password:
                  github
                </p>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle5(!view5)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
               
              </div>
              <div>
                <a href="https://fahad-israr.github.io/Face_Recognizer/" target='new'>
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a href="https://github.com/fahad-israr/Face_Recognizer" target='new'>
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle6(1);
            }}
            onMouseLeave={() => {
              toggle6(0);
            }}
          >
            <h1>Cat App</h1>
            <ReactCardFlip isFlipped={view6} flipDirection="horizontal">
              <img
                key="front"
                src={require("./images/cat.png")}
                alt="Cat App"
              />
              <div className="reverse" key="back">
                <h1>
                  Fetches Images of Catbots from Robohash & Re-renders on Search
                </h1>
                <h3>The first PWA I developed as a React Learner</h3>
                <p>Meets most of Google Specifications for a PWA</p>
                <p>Includes Custom Splash and Prompts to Insall as Well</p>
                <p>PWA Score of 100 as audited by Google Lighthouse 4.2.0</p>
                <p>Deployed as Demo On gh-pages</p>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle6(!view6)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
                
              </div>
              <div>
                <a href="https://fahad-israr.github.io/CatApp/" target='new'>
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a href="https://github.com/fahad-israr/CatApp" target='new'>
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2 style={{ marginTop: "50px" }}>
          I'd love it If you'd contribute to my Work.
          <br />
          Its very simple: Fork it, Improve it and Request a PR.
          <br />
          You can find more of my contributions here:{" "}
          <a href="https://github.com/fahad-israr" target="new">
            Fahad-Israr
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <br />
          <br />
          Liked this Page?{" "}<br/>
          <a
            href="https://github.com/fahad-israr/A-Developer-Portfolio-on-React-Js"
            target="new"
          >
            View Source Code
            <FontAwesomeIcon icon={faGithub} />
          </a>{" "}
        </h2>
      </div>
      ------------Footer--------------- */}
      <div className="footer">
        <div>
          <h2>Connect With Me:</h2>
        </div>
        <div className="icon-container">
          <a
            title="Google"
            className="fa"
            href="mailto:f168345@nu.edu.pk"
            target="new"
          >
            <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
          <a
            title="Linkedin"
            className="fa"
            href="https://www.linkedin.com/in/muhammadhamza10"
            target="new"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            title="Github"
            className="fa2"
            href="https://github.com/thisishamza"
            target="new"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          </div>
        {/* <div className="made">
          <h2>
            <FontAwesomeIcon icon={faCode} /> with{" "}
            <FontAwesomeIcon icon={faHeart} /> on{" "}
            <FontAwesomeIcon icon={faReact} />{" "}
          </h2>
        </div> */}
      </div>
    </div>
  );
}

export default App;
