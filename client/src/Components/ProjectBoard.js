import React from 'react'
import {useState, useEffect} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from './List';
import Card from './Card';
import { useParams } from "react-router-dom"
import LoggedNav from './LoggedNav';

const draggableSamples = [
     {id : "1", 
      name: "Drag-1"
     },
     {id : "2", 
     name: "Drag-2"
     },
     {id : "3", 
     name: "Drag-3"
     },
     {id : "4", 
     name: "Drag-4"
     },
     {id : "5", 
     name: "Drag-5"
     },
     {id : "6", 
     name: "Drag-6"
     },
     {id : "7", 
     name: "Drag-7"
     }
   ]
   
   const startColumns = {
     "column-1": {
       name : "Needs to be Done",
       items : draggableSamples
     },
     "column-2": {
       name : "In Progress",
       items : []
     },
     "column-3": {
       name : "Completed",
       items : []
     }
   }

function ProjectBoard({setUser}) {
     const params = useParams();
     const [lists,setLists] = useState(null);
     const [columns, setColumns] = useState(startColumns)
     // const [cards,setCards] = useState(null);

     const onDragEnd = (result, columns, setColumns) => {
          console.log(result)
          if (!result.destination) return;
          const { source, destination } = result;
          if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destinationColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destinationItems = [...destinationColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destinationItems.splice(destination.index, 0, removed);
            setColumns({
              ...columns,
              [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
              },
              [destination.droppableId]: {
                ...destinationColumn,
                items: destinationItems
              }
            })
          } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
              ...columns, 
              [source.droppableId]: {
                ...column,
                items : copiedItems
              }
          }
          )
          }
          
        }

     useEffect(() => {
          fetch(`/projects/${params.projectId}/lists`).then((res) => {
               if (res.ok) {
                    res.json().then((lists)=> {
                         setLists(lists);
                    });
               }
          })
     },[])


     return (
          <div className="drag-drop-container">
    <DragDropContext onDragEnd={ result => onDragEnd(result, columns, setColumns)}>
      {Object.entries(columns).map(([id,column])=> {
        return (
          <div className="droppable-container">
            <h2>{column.name}</h2> 
          <Droppable droppableId={id} key={id}>
            {(provided, snapshot) => (
              <div
              ref={provided.innerRef}
              style={{ 
                backgroundColor: snapshot.isDraggingOver ? 'lightblue' : 'gray' 
              }}
              {...provided.droppableProps}
              className="droppable"
              >
                {column.items.map((item, index) => {
                  return (
                    <div className="draggable-container">
                      <Draggable draggableId={item.id} key={item.id} index={index}>
                    {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="draggable">
                         {item.name}
                    </div>
                    )}
               </Draggable>
               </div>
                  )
                })}
                {provided.placeholder}
              </div>
  )}
    </Droppable> 
    </div>
        )
      })}
    </DragDropContext>
    </div>
  );
}

export default ProjectBoard
