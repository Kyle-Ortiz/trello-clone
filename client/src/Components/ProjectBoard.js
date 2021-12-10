import React from 'react'
import List from './List'
import {useState, useEffect} from 'react'

function ProjectBoard({projectId}) {
     const [lists,setLists] = useState(null);
     const [cards,setCards] = useState(null);

     useEffect(() => {
          
     },[])


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
