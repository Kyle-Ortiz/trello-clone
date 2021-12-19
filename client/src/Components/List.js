import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import Card from './Card'


function List({cards}) {

     function cardMapper(cards) {
          const userCards = cards.map((card) => {
               return <Card text={card} />
          })
     }

     return (
          <Droppable droppableId="droppable-1">
  {(provided, snapshot) => (
    <div
      ref={provided.innerRef}
      style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
      {...provided.droppableProps}
    >
      I am a droppable!
      {provided.placeholder}
    </div>
  )}
</Droppable>
     )
}

export default List
