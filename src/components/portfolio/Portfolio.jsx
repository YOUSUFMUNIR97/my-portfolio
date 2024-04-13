import "./portfolio.css";

import IMG1 from "../../assets/fitness website.PNG";
import IMG2 from "../../assets/sleece.png";
import IMG3 from "../../assets/Todo-List.png";
import IMG4 from "../../assets/Blood Bank.png";
import IMG5 from "../../assets/onlineshopping.png";
import IMG6 from "../../assets/Project4.jpg";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Fitness Website with React.js",
      img: IMG1,
      description:
        "Fitness Website",
      technologies: "React Js",
      link: "https://fitness-cf335.web.app/",
    },
    {
      id: 2,
      title: "Blood Bank",
      img: IMG4,
      description:
        "The COVID Tracking Project collects and publishes the most complete testing data available for all areas of the world.",
      technologies: "React | Redux",
      link: "https://hakatone-c5769.web.app/",
    },
    {
      id: 3,
      title: "Sleece Ecommerce Website",
      img: IMG2,
      description: "This site is help to notes your work.",
      technologies: "React | Redux",
      link: "https://sleece.netlify.app/",
    },
    {
      id: 4,
      title: "Todo App",
      img: IMG3,
      description: "This site is a kind of social media platform. You can register and share your posts.",
      technologies: "React ",
      link: "https://todo-app-6121c.web.app/",
    },
    {
      id: 5,
      title: "E - Commerece",
      img: IMG5,
      description: "This site is a kind of Online Shopping platform.",
      technologies: "HTML, CSS and JavaScript ",
      link: "https://e-storeshopio.netlify.app/",
    }
    // {
    //   id: 4,
    //   title: "Startup Landing Page",
    //   img: IMG3,
    //   description:
    //     "A dedicated, standalone web page built for specific campaigns and target audiences.",
    //   technologies: "Html | CSS | JavaScript | Next Js",
    //   link: "https://alpha-agency-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Alpha-Agency-Project",
    // },
    // {
    //   id: 5,
    //   title: "Jokes Project with Typescript",
    //   img: IMG5,
    //   description:
    //     "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
    //   technologies: "Html | Styled-components | Typescript",
    //   link: "https://jokes-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Joke-App",
    // },
    // {
    //   id: 6,
    //   title: "Fs Poster Website",
    //   img: IMG6,
    //   description:
    //     "Real-world group project which is still in progress and will provide educational platform for future young developers",
    //   technologies: "Html | Scss | Javascript",
    //   link: "https://fs-poster-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
