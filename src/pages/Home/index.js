import React from "react";
import Project from "../Project";
import Contact from "../Contact";
import About from "../About";
import { Banner, Service } from "../../components";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <About />
      <Service />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
