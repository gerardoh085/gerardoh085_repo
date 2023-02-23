import React from 'react'
import { useParams } from 'react-router-dom';
import {items} from './ProjectItems';
import { FaGithubSquare } from 'react-icons/fa';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const {id} = useParams();
    const project = items[id];

  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <p>
            <b>Skills:</b> {project.skills}
        
        </p>        
        <div>
          <h2>GitHub Repository:</h2> 
          <br/>
          <a href={project.GHLink} target='_blank'><FaGithubSquare size={80}/></a>
          
        </div>

    </div>
  )
}

export default ProjectDisplay;
