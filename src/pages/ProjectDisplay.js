import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <br/><br/><br/><br/><br/><br/>
      <h1> {project.name}</h1>
      <img src={project.image} alt={"something"}/>
      {/* <input type="image" img src = {project.image} alt="project image" /> */}
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a rel="noreferrer"  target="_blank" href="https://github.com/harshp-252k2" ><GitHubIcon/></a>
    </div>
  );
}

export default ProjectDisplay;
