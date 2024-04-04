import React from "react";
import { NavBar } from "../../components/navbar/NavBar";
import { LeftBar } from "../../components/leftbar/LeftBar";
import { RightBar } from "../../components/rightbar/RightBar";
import { Content } from "../../components/content/Content";

import "./home.scss"; // Importing the home component's stylesheet

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <LeftBar />
        <Content />
        <RightBar />
      </div>
    </>
  );
};
