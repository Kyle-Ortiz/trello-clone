import React from 'react'
import {useState, useEffect} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useParams } from "react-router-dom"
import LoggedNav from './LoggedNav';
import { v4 as uuidv4 } from 'uuid';

// const draggableSamples = [
//      {id : "1", 
//       name: "Drag-1"
//      },
//      {id : "2", 
//      name: "Drag-2"
//      },
//      {id : "3", 
//      name: "Drag-3"
//      },
//      {id : "4", 
//      name: "Drag-4"
//      },
//      {id : "5", 
//      name: "Drag-5"
//      },
//      {id : "6", 
//      name: "Drag-6"
//      },
//      {id : "7", 
//      name: "Drag-7"
//      }
//    ]
   
//    const startColumns = {
//      "column-1": {
//        name : "Needs to be Done",
//        cards : draggableSamples
//      },
//      "column-2": {
//        name : "In Progress",
//        cards : []
//      },
//      "column-3": {
//        name : "Completed",
//        cards : []
//      }
//    }

function ProjectBoard({setUser}) {
     const params = useParams();
     const [columns, setColumns] = useState({});
     const [newTask, setNewTask] = useState({});
     useEffect(() => {
          fetch(`/projects/${params.projectId}/lists`).then((res) => {
               if (res.ok) {
                    res.json().then((lists)=> {
                         const colObject = {}
                         lists.map((list)=> {
                              colObject[uuidv4()] = list
                         })
                         setColumns(colObject);
                         const tasks = {}
                         Object.keys(colObject).forEach((list)=> {
                              tasks[list] = ''
                         })
                         setNewTask(tasks);
                    });
               }
          })
     },[])

     const taskSubmit = (id,e) => {
          e.preventDefault();
          fetch(`/lists/${columns[id].id}/cards`, {
               method: 'POST',
               headers: {
               'Content-Type': 'application/json',
               },
               body: JSON.stringify(
                    {name : newTask[id]}
               ),
               })
               .then(response => {
                    if (response.ok) {
                         response.json().then(data => {
                              console.log('Success:', data);
                              const column = columns[id];
                              const copiedItems = [...column.cards]
                              const addItem = data
                              copiedItems.push(addItem);
                              setColumns({
                                   ...columns, 
                                   [id]: {
                                     ...column,
                                     cards : copiedItems
                                   }})
                    })
                    } else {
                         window.alert('Failed to submit task')
                    }
               })
          setNewTask({...newTask,
                    [id]: ""});     
     }

     const onDragEnd = (result, columns, setColumns) => {
          if (!result.destination) return;
          console.log(result)
          const { source, destination } = result;
          if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destinationColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.cards];
            const destinationItems = [...destinationColumn.cards];
            const [removed] = sourceItems.splice(source.index, 1);
            destinationItems.splice(destination.index, 0, removed);
            setColumns({
              ...columns,
              [source.droppableId]: {
                ...sourceColumn,
                cards: sourceItems
              },
              [destination.droppableId]: {
                ...destinationColumn,
                cards: destinationItems
              }
            })
            fetch(`/cards/${removed.id}`, {
               method: 'PATCH',
               headers: {
               'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                    "destination_list" : destinationColumn.id, 
                    "position" : destination.index + 1,
               }),
               })
               .then(response => response.json())
               .then(data => {
               console.log('Success:', data);
          })
          } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.cards];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
              ...columns, 
              [source.droppableId]: {
                ...column,
                cards : copiedItems
              }
          }
          )
          fetch(`/cards/${removed.id}`, {
               method: 'PATCH',
               headers: {
               'Content-Type': 'application/json',
               },
               body: JSON.stringify({"position": destination.index + 1}),
          })
          .then(response => response.json())
          .then(data => {
          console.log('Success:', data);
})

          }
          
     } 

     const removeTask = (id,cardId) => {
          fetch(`/cards/${cardId}`, {
               method: 'DELETE',
               headers: {
               'Content-Type': 'application/json',
               },
               body: JSON.stringify(),
          }).then((r)=> {
               if (r.ok) {
                    r.json().then(data => {
                         console.log('Success:', data);
                         const newItems = columns[id].cards.filter((card)=> card.id !== data.id);
                         setColumns({
                              ...columns, 
                              [id]: {
                                ...columns[id],
                                cards : newItems
                              }
                    })
               })
               }
          }
          )
     }

     return (
          <div>
               <LoggedNav setUser={setUser}/>
          <div className="drag-drop-container">
    <DragDropContext onDragEnd={ result => onDragEnd(result, columns, setColumns)}>
      {Object.entries(columns).map(([id,column])=> {
        return (
          <div className="droppable-container" key={id}>
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
                {column.cards.map((card, index) => {
                  return (
                    <div className="draggable-container" key={card.id}>
                      <Draggable draggableId={card.id.toString()} key={card.id} index={index}>
                    {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="draggable">
                         {card.name}
                         <button className="task-buttons"onClick={()=> removeTask(id,card.id)}>Delete</button>
                    </div>
                    )}
               </Draggable>
               
               </div>
                  )
                })}
                {provided.placeholder}
                <form action="submit" className="task-form" onSubmit={(e)=>taskSubmit(id,e)}>
                    <input type="text" placeholder="New Task" value={newTask[id]} onChange={(e)=> setNewTask({...newTask, [id] : e.target.value})}/>
                    <input type="submit" value="Add Task"/>
               </form>
              </div>
  )}
    </Droppable> 
    </div>
        )
      })}
    </DragDropContext>
    </div>
    </div>
  );
}

export default ProjectBoard
