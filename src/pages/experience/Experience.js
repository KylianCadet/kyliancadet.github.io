import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import "./Experience.css";
import { Fade } from "react-reveal";
import Experiences from "../../containers/experience/Experiences"
import ExperienceImg from "./ExperienceImg";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <div className="sticky-img">
                  <ExperienceImg className="experience-img" theme={theme} />
                </div>
              </div>
              <div className="heading-content">
                <Experiences theme={theme}/>
              </div>
            </div>
          </Fade>
        </div>
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Experience;
