import React from 'react'
import {useState} from 'react'

function ProjectForm({user,setUserProjects,setButton}) {
     const [newProj, setNewProj] = useState("")

     const formSubmit = (e) => {
          e.preventDefault()
          fetch(`/users/${user.id}/projects`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({
                    "user_id": user.id,
                    "name": newProj
               }),
          }).then((res) => {
               if (res.ok) {
                    res.json().then((projects)=> {
                         setUserProjects(projects)
                    })
               } else {

               }
          })
          setNewProj("")
          setButton(false)
     }

     return (
          <div>
               <form className="project-form"action="submit" onSubmit={(e)=> formSubmit(e)}>
                    <input type="text" value={newProj} onChange={(e)=> setNewProj(e.target.value)}/>
                    <input type="submit" />
               </form>
          </div>
     )
}

export default ProjectForm
