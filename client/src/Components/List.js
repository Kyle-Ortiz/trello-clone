import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import Card from './Card'


function List({cards}) {

     const cardMapper = () => {
          cards.forEach((card) => {
               return <Card text={card}/>
          })
     }

     return (
          <Droppable>
               <div>
                    {cardMapper(cards)}
               </div>
          </Droppable>
          
     )
}

export default List
