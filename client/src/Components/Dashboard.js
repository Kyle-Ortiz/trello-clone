import React from 'react'
import LoggedNav from './LoggedNav'
import {useEffect,useState} from 'react'
import {useRecoilState,useRecoilValue} from 'recoil'
import ProjectCard from './ProjectCard'
import ProjectBoard from './ProjectBoard'

function Dashboard({user}) {
     const[errors,setErrors] = useState(null);
     const[userProjects,setUserProjects] = useState(null);
     const[inProject,setInProject] = useState(false);

     useEffect(() => {
          fetch(`/projects/${user.id}`).then((r) => {
               if (r.ok) {
                    r.json().then((projects) => {setUserProjects(projects)})
               }
               else {
                    r.json().then((errors)=> setErrors(errors))
               }
          })
     }, [])

     function cardMapper(projArr) {
          const cards = projArr.map((project) => {
               return <ProjectCard name={project.name} key={project.id} setInProject={setInProject}/>
          })
          return cards
     }

     return (
          <div className="dashboard">
               <LoggedNav />
               {inProject ? <ProjectBoard projectId={1}/>: 
               <div className="dashboard-list-header"> 
                    <h2>Your Projects</h2>
                    <div className="project-card-container">
                         {userProjects ? cardMapper(userProjects) : null}
                    </div>
               </div>
                    
               }
               
          </div>
     )
}

export default Dashboard
