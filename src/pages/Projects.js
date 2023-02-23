import React from 'react'
import ProjectList from './ProjectList';
import {items} from './ProjectItems';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects!</h1>
      <div className='projectList'>
          {items.map((project, id) => {
            return(
              <ProjectList name={project.name} image={project.image} id={id}/>
            );
          })}
      </div>
      
    </div>
  )
}

export default Projects;
