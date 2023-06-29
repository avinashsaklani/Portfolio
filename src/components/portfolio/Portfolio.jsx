import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/IMG1.png";
import IMG2 from "../../assets/IMG2.png";
import IMG3 from "../../assets/IMG3.png";
import IMG4 from "../../assets/IMG4.png";
import IMG5 from "../../assets/IMG5.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Prompt Paradise ~ Discover Prompts",
    github: "https://github.com/avinashsaklani/PromptParadise",
    demo: "https://prompt-paradise.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Style Ground ~ Code in your Own Way",
    github: "https://github.com/avinashsaklani/style-ground",
    demo: "https://style-ground.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Git Google ~ Search Anyone on Github",
    github: "https://github.com/avinashsaklani/GitGoogle",
    demo: "https://git-google.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "SpaceXpedia ~ All about SpaceX Missions",
    github: "https://github.com/avinashsaklani/SpaceX_InfoRocket",
    demo: "https://spacexpedia.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "YouTube 2.0 ~ Search your Genere in your own way",
    github: "https://github.com/avinashsaklani/Youtube-2.0",
    demo: "https://avinash-youtube.netlify.app/",
  },
];
const Portfolio = () => {
  return (
    <div id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-btn">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
