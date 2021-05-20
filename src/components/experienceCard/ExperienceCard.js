import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade, Flip } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience
    const theme = this.props.theme;
    return (
      <div className="experience-card">
        <Flip left duration={2000}>
          <div className="card-img">
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                transform: "scale(50%, 50%)",
              }}
              src={require(`../../assests/images/${experience.logo_path}`)}
              alt={experience.alt_name}
            />
          </div>
        </Flip>
        <Fade right duration={2000} distance="40px">
          <div className="card-body">
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  {experience.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {experience.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: theme.text }}>
                  {experience.duration}
                </h3>
              </div>
            </div>
            <div className="body-content">
              {experience.descriptions.map((sentence) => {
                return (
                  <p key={sentence} className="content-list" style={{ color: theme.text }}>
                    {sentence}
                  </p>
                );
              })}
              <a
                href={experience.website_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="visit-btn"
                  style={{ backgroundColor: theme.headerColor }}
                >
                  <p className="btn" style={{ color: theme.text }}>
                    Voir le site
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    )
  }
}

export default ExperienceCard;
