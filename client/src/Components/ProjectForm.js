import React from 'react'
import {useState} from 'react'

function ProjectForm({user,projects,setUserProjects,setButton}) {
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
                    res.json().then((project)=> {
                         console.log(project)
                         debugger;
                         setUserProjects([...projects,project])
                    })
               } else {

               }
          })
          setNewProj("")
          setButton(false)
     }

     return (
          <div className="new-project-form">
               <form className="project-form"action="submit" onSubmit={(e)=> formSubmit(e)}>
                    <input type="text" value={newProj} placeholder="Project name"onChange={(e)=> setNewProj(e.target.value)}/>
                    <input type="submit" value="Create New Project"/>
               </form>
          </div>
     )
}

export default ProjectForm
