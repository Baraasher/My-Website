import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main
    description={
      "Baraa Alsher personal website. New York based Stanford ICME graduate, " +
      "co-founder and CTO of Arthena, and YC Alumni."
    }
  >
    <a target={"_blank"} href="https://github.com/Baraasher">
      <div id="github-card">
        <h2>Github Profile</h2>

        <h6>VIEW MY GITHUB PROFILE TO SEE MY REPOSITORY</h6>
      </div>
    </a>


    <a target={"_blank"} href="https://www.youtube.com/@CodeWithBaraa">
      <div id="youtube-card">
        <h2>YOUTUBE CHANEL</h2>

        <h6>MY YOUTUBE CHANNEL FOR CODING EXPLANATION</h6>
      </div>
    </a>


  </Main>
);

export default Index;
