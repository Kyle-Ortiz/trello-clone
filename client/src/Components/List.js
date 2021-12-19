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
          <Droppable>
               <div>
                    hello
               </div>
          </Droppable>
          
     )
}

export default List
