import React from 'react'
import List from './List'

function ProjectBoard() {


     function listMapper(lists) {
          const lists = lists.map((list) => {
               <List key={list.id} />
          })
     }

     return (
          <div id="project-board">
               
          </div>
     )
}

export default ProjectBoard
