import React from 'react'
import LoggedNav from './LoggedNav'
import {useEffect,useState} from 'react'
import {useRecoilState,useRecoilValue} from 'recoil'
import ProjectCard from './ProjectCard'

function Dashboard() {
     const[errors,setErrors] = useState(null);
     const[userProjects,setUserProjects] = useState(null);

     useEffect(() => {
          fetch(`/projects/${1}`).then((r) => {
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
               return <ProjectCard name={project.name} key={project.id} />
          })
          return cards
     }

     return (
          <div className="dashboard">
               <LoggedNav />
               <h2>Your Projects</h2>
               <div className="project-card-container">
                    {userProjects ? cardMapper(userProjects) : null}
               </div>
          </div>
     )
}

export default Dashboard
