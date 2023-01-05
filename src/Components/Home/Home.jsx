import React from "react";
import "./HomeBig.css";
import "./Home.css";
import "../utility/utility.css";
import About from "../About/About";
import { Link } from "react-router-dom";
import linkedin from "../../imgs/linkedin.png"
import github from "../../imgs/github.png"
import cv from "../../imgs/cv.png"
import profile from "../../imgs/profile.jpg"
import Portfolio from "../Portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <div className="Home-container" id="home">
        <header>
          <div className="header-left">
            <h2>Chinmoy Dehingia</h2>
          </div>
          <div className="header-right">
            <ul>
              <a href="#home">
                <li>Home</li>
              </a>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#portfolio">
                <li>Portfolio</li>
              </a>
              {/* <a href="#exp">
                <li>Experience</li>
              </a> */}
            </ul>
          </div>
        </header>
        <section className="home-content pad">
          <div className="home-left">
            <h1>
              I'm a Full Stack
              <br />
              Developer
            </h1>
            <p>
              I’m an aspiring Full Stack Developer looking for a new role in an
              exciting company. I am a creative developer based in
              India. I have hands-on experience in building projects using HTML,
              CSS, Javascript, and MERN stack. I speacialise in creating
              interactive experiences using React.
            </p>
            <div className="connect-icons">
              <a href="https://www.linkedin.com/in/chinmoy-dehingia-02a352137/" target={0}><img src={linkedin} alt="" /></a>
              <a href="https://github.com/chinmoy-7" target={0}><img src={github} alt="" /></a>
              <a href="https://drive.google.com/file/d/1YwH6KCbArVY6jwBi8HFH_sQ8eaLMR85t/view?usp=share_link"><img src={cv} alt="" /></a>
            </div>
          </div>
          <div className="home-right">
            <img src={profile} alt="" />
          </div>
        </section>
      </div>
      <About />
      <Portfolio/>  
    </>
  );
}
