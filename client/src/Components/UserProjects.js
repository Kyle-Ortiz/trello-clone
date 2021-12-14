import React from 'react'
import ProjectCard from './ProjectCard'

function UserProjects({projects, setInProject, setClickedId}) {

     function cardMapper(projArr) {
          const cards = projArr.map((project) => {
               return <ProjectCard pId={project.id} name={project.name} setClickedId={setClickedId} key={project.id} setInProject={setInProject}/>
          })
          return cards
     }

     return (
          <div className="project-card-container">
               {cardMapper(projects)}
          </div>
     )
}

export default UserProjects
