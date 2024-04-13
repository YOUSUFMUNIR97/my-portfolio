import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'



const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Muhammad Yousuf Munir" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresh</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              {/* <small>10+ Completed Projects</small> */}
            </article>
          </div>
          <p style={{justifyContent: 'center  ', alignItems: 'center'}}>
            "Aspiring Front End Developer with a strong foundation in web development. 
            Eager to learn and apply web-based user interaction concepts and create responsive 
            user interfaces using React. Skilled in translating design mockups into clean code, 
            and proficient in JavaScript and React JS. Dedicated to optimizing frontend performance 
            and problem-solving to enhance the user experience."
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
