import React from 'react'
import {useNavigate} from 'react-router-dom'

function ProjectCard({name, key,setInProject}) {
     const navigate = useNavigate();
     function cardClicker() {
          setInProject(true);
     }

     return (
          <div className="project-card" onClick={}>
               <h3>{name}</h3>
          </div>
     )
}

export default ProjectCard
