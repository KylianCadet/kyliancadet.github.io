import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Project from "./project/Project";
import Skill from "./skill/Skill"

export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <BrowserRouter basename="/">
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} theme={theme} />}
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={theme} />}
          />
          <Route
            path="/skills"
            render={(props) => <Skill {...props} theme={theme} />}
          />
          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience {...props} theme={theme} />
            )}
          />
          <Route
            path="/education"
            exact
            render={(props) => (
              <Education {...props} theme={theme} />
            )}
          />
          <Route
            path="/projects"
            render={(props) => (
              <Project {...props} theme={theme} />
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}
