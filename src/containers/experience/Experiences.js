import React, { Component } from "react";
import "./Experiences.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { experience } from "../../portfolio";

class Experiences extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="experience">
        <div className="experience-body-div">
          {experience.experiences.map((experience) => {
            return <ExperienceCard key={experience.title} experience={experience} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Experiences;
