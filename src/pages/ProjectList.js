import React from 'react'
import { useNavigate } from 'react-router-dom';


function ProjectList({name, image, id}) {
    const nav = useNavigate();
  return (
    <div className='projectItem'
    onClick={()=>{
        nav('/gerardoh085_repo/project/' + id);
    }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  )
}

export default ProjectList;
