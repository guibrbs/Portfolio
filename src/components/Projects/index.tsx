import React from "react";
import "./styles.css";
import Metabase from "../../assets/images/metabase.png";
import SignIn from "../../assets/images/sliding-signin.png";
import CloneNetflix from "../../assets/images/clone-netflix.png";
import LandingPage from "../../assets/images/landing-page.png";
import InteractiveRating from "../../assets/images/interactive-rating.png";
import CovidTracker from "../../assets/images/covid-tracker.png";

export default function Projects() {
  type Projects_map = object[];
  const projects_map: Projects_map = [
    {
      link: "/Portfolio/projetos/INDICAA",
      img: Metabase,
      alt: "image-metabase",
      title: "INDICAA",
      description:
        "Feito exclusivamente para coordenadores e pessoas da gestão da Universidade de Brasília, com o intuito de auxiliar a administração das matérias ofertadas, indicando \
        através de gráficos disponíveis no Metabase.",
      id: "one",
    },
    {
      link: "/Portfolio/projetos/SignIn",
      img: SignIn,
      alt: "image-sign-in",
      title: "Sign in | Sign up",
      description:
        "Mini projeto pessoal com o objetivo de aprimorar as habilidades técnicas no qual envolve o desenvolvimento de formulários de sign in e sign up, alternando entre si \
        com animações sem nenhum framework.",
      id: "two",
    },
    {
        link: "/Portfolio/projetos/Landing-Page",
        img: LandingPage,
        alt: "Landing Page",
        title: "Landing Page",
        description:
        "Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento de uma Landing Page responsiva em qualquer dispositivo, além de incluir o modo noturno\
        animado.",
        id: "three",
    },
    {
      link: "/Portfolio/projetos/Clone-Netflix",
      img: CloneNetflix,
      alt: "Clone Netflix",
      title: "Clone Netflix",
      description:
        "Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento de uma interface parecida com a da Netflix, utilizando imagens captadas \
        através de uma API open source.",
      id: "four",
    },
    {
      link: "/Portfolio/projetos/Interactive-Rating",
      img: InteractiveRating,
      alt: "Interactive Rating Component",
      title: "Interactive Rating Component",
      description:
        "Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento um componenete interativo de classificação. ",
      id: "five",
    },
    {
      link: "/Portfolio/projetos/Covid-Tracker",
      img: CovidTracker,
      alt: "Covid Tracker",
      title: "Covid Tracker",
      description:
        "Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento de um rastreador de casos de COVID-19 no Brasil e no mundo,\
        através de uma API open source.",
      id: "six",
    },
  ];
  return (
    <div className="projects-area">
      <h1 className="container-title">Principais projetos</h1>
      <div className="arrow">
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="container-projects">
        {projects_map.map((project: any) => {
          return (
            <div className="projects" id={project.id} key={project.id}>
              <a href={project.link}>
                <img src={project.img} alt={project.alt} className="imgs" />
                <div className="content-project">
                  <h2 className="description-project">
                    <b>{project.title}</b>
                  </h2>
                  <p className="description-project">{project.description}</p>
                  <p className="description-project">Saiba mais</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <h2 className="explore">
        <a href="/Portfolio/projetos">Explore mais projetos</a>
      </h2>
    </div>
  );
}