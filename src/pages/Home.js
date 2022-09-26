import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function Home() {
  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   let path = `"https:://WWW.linkedin.com/in/harsh-patel-22b875244"`; 
  //   navigate(path);
  // }
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Harsh Patel</h2>
        <div className="prompt">
          <p>A FullStack developer with a passion for learning and creating.</p>
          
          <a rel="noreferrer"  target="_blank" href="https://www.linkedin.com/in/harsh-patel-22b875244"><LinkedInIcon/></a>
           
            
              <a rel="noreferrer"  target="_blank" href="mailto:harshnp2502@gmail.com"><EmailIcon /></a>
            
            
              <a rel="noreferrer"  target="_blank" href="https://www.github.com/harshp-252k2" ><GithubIcon /></a>
            
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, JavaScript, BootStrap, ReactJs, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, REST API, MongoDB, MySQL, PHP
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C,  </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
