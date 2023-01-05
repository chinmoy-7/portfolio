import React from "react";
import "../utility/utility.css";
import "./AboutBig.css";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about-container pad" id="about">
        <div className="about-header">
          <h1>About</h1>
        </div>
        <div className="about-content">
          <p>
            A creative and diligent aspiring full-stack developer with a
            specialization in Mern Stack development. Self-believing and
            enthusiastic, with a keen interest in building and designing Backend
            and Frontend. Looking forward to sharpening my skills in a
            challenging environment. I guarantee enthusiasm in work and
            fulfilling my projects with inexpressible efforts.
          </p>
          <p>
              The web can sometimes be indistinguishable from magic, but I have
              the knowledge and patience required to make just about anything.
            </p>
        </div>
      </div>
    </>
  );
}
