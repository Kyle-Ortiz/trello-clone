import React from 'react'
import LoggedNav from './LoggedNav'
import {useEffect,useState} from 'react'
import {useRecoilState,useRecoilValue} from 'recoil'
import ProjectCard from './ProjectCard'
import ProjectBoard from './ProjectBoard'
import UserProjects from './UserProjects'

function Dashboard({user}) {
     const[errors,setErrors] = useState(null);
     const[isloading, setIsloading] = useState(true)
     const[userProjects,setUserProjects] = useState(null);
     const[inProject,setInProject] = useState(false);
     const[clickedId, setClickedId] = useState(null)

     useEffect(() => {

          if (user) {
               fetch(`/projects/${user.id}`).then((r) => {
                    if (r.ok) {
                         r.json().then((projects) => {
                              setUserProjects(projects);
                              setIsloading(false);
                         })
                    }
                         else {
                    r.json().then((errors)=> setErrors(errors))
                    }
          })
          } else {
               
          } 
     }, [user])
     

     return (
          <div className="dashboard">
               <LoggedNav />
               {inProject ? <ProjectBoard projectId={clickedId}/>: 
               <div className="dashboard-list-header"> 
                    <h2>Your Projects</h2>
                    {!isloading ? <UserProjects projects={userProjects} setClickedId={setClickedId} setInProject={setInProject} />: <p>Please wait while we load your projects...</p>}
               </div>
                    
               }
               
          </div>
     )
}

export default Dashboard
