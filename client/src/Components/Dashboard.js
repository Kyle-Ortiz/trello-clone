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

     function mapUserProjects(userProjects) {
          return userProjects.map((project) => {
               <ProjectCard projectName={project.name} key={project.id} />
          })
     }

     return (
          <div>
               <LoggedNav />
               <div className="project-card-container">
                    {userProjects ? mapUserProjects(userProjects) : null}
               </div>
          </div>
     )
}

export default Dashboard
