import React from 'react'
import LoggedNav from './LoggedNav'
import {useEffect,useState} from 'react'
import ProjectBoard from './ProjectBoard'
import UserProjects from './UserProjects'
import ProjectForm from './ProjectForm'

function Dashboard({user, setUser}) {
     const[errors,setErrors] = useState(null);
     const[isloading, setIsloading] = useState(true)
     const[userProjects,setUserProjects] = useState(null);
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
               <LoggedNav setUser={setUser}/>
               <div className="dashboard-list-header"> 
                    <h2>Your Projects</h2>
                    {!isloading ? <UserProjects projects={userProjects} setProjects={setUserProjects}setClickedId={setClickedId} />: <p>Please wait while we load your projects...</p>}
                    <div>
                         <button id="new-project" onClick={() => setButton(!button)}>New Project</button>
                         {button ? <ProjectForm user={user} projects={userProjects} setUserProjects={setUserProjects} setButton={setButton}/> : null}
                    </div>
                    {errors ? <div className="error-div">
                         {errors}
                    </div> : null}
               </div>
               
          </div>
     )
}

export default Dashboard
