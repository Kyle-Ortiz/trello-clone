import React from 'react'
import ProjectCard from './ProjectCard'

function UserProjects({projects, setInProject, setProjects,setClickedId}) {

     function cardMapper(projArr) {
          const cards = projArr.map((project) => {
               return <ProjectCard pId={project.id} setProjects={setProjects} projects={projects} name={project.name} setClickedId={setClickedId} key={project.id} />
          })
          return cards
     }

     return (
          <div className="project-card-container">
               {projects ? cardMapper(projects): null}
          </div>
     )
}

export default UserProjects
