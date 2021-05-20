import React, { Component } from "react";
import Header from "../../components/header/Header";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Project.css";
import ProjectImg from "./ProjectImg";

class Project extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
                <Button
                  text={"Voir tout mes projets"}
                  className="project-button"
                  href="https://github.com/KylianCadet"
                  newTab={true}
                  theme={theme}
                />
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {projects.data.map((project) => {
            return <GithubRepoCard key={project.name} repo={project} theme={theme} />;
          })}
        </div>
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Project;
