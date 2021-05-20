import React from "react";
import "./Skill.css";
import SkillSection from "./SkillSection";
import Header from "../../components/header/Header"
import TopButton from "../../components/topButton/TopButton";

export default function Skill(props) {
  const theme = props.theme;
  return (
    <div>
      <Header theme={theme} />
      <div className="main" id="skills">
        <SkillSection theme={theme} />
      </div>
      <TopButton theme={theme} />
    </div>
  );
}
