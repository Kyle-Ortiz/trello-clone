import React from 'react'

function NewProjectTile({setButton}) {
  return (
    <button onClick={()=> setButton(true)} className="project-card">
         Create New Project Here
    </button>
  )
}

export default NewProjectTile