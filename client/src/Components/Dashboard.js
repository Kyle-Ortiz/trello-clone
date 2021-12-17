import React from 'react'
import LoggedNav from './LoggedNav'
import {useEffect,useState} from 'react'
import ProjectBoard from './ProjectBoard'
import UserProjects from './UserProjects'
import ProjectForm from './ProjectForm'

function Dashboard({user}) {
     const[errors,setErrors] = useState(null);
     const[isloading, setIsloading] = useState(true)
     const[userProjects,setUserProjects] = useState(null);
     const[inProject,setInProject] = useState(false);
     const[clickedId, setClickedId] = useState(null);
     const[button, setButton] = useState(false)

     useEffect(() => {

          if (user) {
               fetch(`users/${user.id}/projects/`).then((r) => {
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
                    <div>
                         <button onClick={() => setButton(!button)}>New Project</button>
                         {button ? <ProjectForm user={user} setUserProjects={setUserProjects} projects={userProjects} setButton={setButton}/> : null}
                    </div>
               <div className="errors-div">
                    {errors ? errors : null}
               </div>
               </div>
                    
               }
               
          </div>
     )
}

export default Dashboard
