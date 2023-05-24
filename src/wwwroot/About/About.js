import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logo from "./aleph-ghosts.png";
import "./About.css";

function About() {
  return (
    <div>
      <Header />
      <div className="about-us">
        <div className="container main-container">
          <img src={logo} alt="Team Aleph Logo" className="logo" />
          <h2>Made by Team Aleph</h2>
          <p className="description">
            We are a computer science team from LTAI High School that aims to
            make people's lives better.
          </p>
          <p className="highlighted-text">
            Through our passion for technology and innovation, we strive to
            create solutions that positively impact various aspects of life.
            Whether it's developing user-friendly software applications,
            designing efficient algorithms, or exploring cutting-edge
            technologies, we are dedicated to leveraging our skills to bring
            about meaningful change.
          </p>
          <p className="highlighted-text">
            Our team collaborates on projects that tackle real-world problems
            and address societal challenges. We believe in the power of
            technology to enhance education, improve healthcare, foster
            sustainable practices, and drive social progress.
          </p>
          <p className="highlighted-text">
            By staying up-to-date with the latest advancements in computer
            science, we continually expand our knowledge and capabilities. We
            embrace learning opportunities, attend hackathons and competitions,
            and engage in research endeavors that push the boundaries of what is
            possible.
          </p>
          <p className="highlighted-text">
            At Team Aleph, we value teamwork, creativity, and a strong work
            ethic. We encourage an inclusive and supportive environment, where
            each team member's unique skills and perspectives contribute to our
            collective success.
          </p>
        </div>

        <div className="container side-container-Chifor">
          <h3>Chifor Darius</h3>
          <p className="highlighted-text"></p>
        </div>

        <div className="container side-container-Raul">
          <h3>Feier Raul</h3>
          <p className="highlighted-text"></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
