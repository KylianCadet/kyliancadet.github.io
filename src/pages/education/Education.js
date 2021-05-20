import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import "./Education.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <div className="sticky-img">
                  <EducationImg theme={theme} />
                </div>
              </div>
              <div className="heading-content">
                <Educations theme={theme} />
              </div>
            </div>
          </Fade>
        </div>
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Education;
