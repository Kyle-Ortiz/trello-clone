import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

function Card({text}) {
     return (
          <Draggable>
               <div className="project-card">
                    <p>{text}</p>
               </div>
          </Draggable>
          
     )
}

export default Card
