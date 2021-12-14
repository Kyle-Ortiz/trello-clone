import React from 'react'
import {useState} from 'react'

function ProjectForm(user) {
     const [newProj, setNewProj] = useState("")

     const formSubmit = () => {
          fetch("/user/projects", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({
                    user: user.id,
                    "project-name": newProj
               }),
          })
     }

     return (
          <div>
               <form className="project-form"action="submit" onSubmit={()=> formSubmit}>
                    <input type="text" value={newProj} onChange={(e)=> setNewProj(e.target.value)}/>
                    <input type="submit" />
               </form>
          </div>
     )
}

export default ProjectForm
