import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import TopButton from "../../components/topButton/TopButton";
import "./Home.css"

class Home extends Component {
  render() {
    return (
      <div className="fullScreen">
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
