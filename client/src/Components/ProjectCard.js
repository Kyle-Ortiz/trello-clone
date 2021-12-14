import React from 'react'
import {useNavigate} from 'react-router-dom'

function ProjectCard({name, pId,setInProject, setClickedId}) {
     const navigate = useNavigate();
     function cardClicker(e) {
          setInProject(true);
          debugger;
          setClickedId(pId)
     }

     return (
          <div className="project-card" onClick={(e) => cardClicker(e)}>
               <h3>{name}</h3>
          </div>
     )
}

export default ProjectCard
