import React from "react";
import "./about.css";

function About() {
  return (
    <div className="container-about">
      <h1>Track me app for hikers</h1>
      <div>
        This is a final project a MERN full-stack app that solves one of the
        major concerns of hikers - let the family know your location almost in
        real-time, so in case of emergency, the family could find a hiker. A
        possible use case: before going to track user adds likely coordinates
        in-app and then in real-time user updates when he passes the spot so
        family and friends could see the user's location. Made by Galperin
        Alexander - Full Stack Developer Student at Appleseeds Academy.
        <a href="https://github.com/galpalex/TrackMe-final-project">
          {" "}
          Visit my Github project
        </a>{" "}
        and my
        <a href="https://www.linkedin.com/in/alexander-galperin/"> Linkedin.</a>
      </div>
    </div>
  );
}

export default About;
