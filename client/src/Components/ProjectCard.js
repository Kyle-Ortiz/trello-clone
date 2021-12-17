import React from 'react'
// import {useNavigate} from 'react-router-dom'

function ProjectCard({name, pId,setInProject,projects, setClickedId,setProjects}) {
     // const navigate = useNavigate();
     function cardClicker(e) {
          setInProject(true);
          debugger;
          setClickedId(pId)
     }

     function deleteHandler(e) {
          e.stopPropagation();
          if (window.confirm('Are you sure you want to delete this project?') === true) {
               fetch(`projects/${pId}`, {
                    method: "DELETE",
                    headers: {
                         "Content-Type": "application/json",
                    }
                    }).then((res) => {
                         if (res.ok) {
                           window.alert('Project deleted successfully')
                           setProjects(projects.filter(project => project.id !== pId))
                         } else {
                              window.alert('Project not deleted, try again later')
                         }
               });
          };

     }

     return (
          <div className="project-card" onClick={(e) => cardClicker(e)}>
               <h3>{name}</h3>
               <button onClick={(e) => deleteHandler(e)}>Delete project</button>
          </div>
     )
}

export default ProjectCard
