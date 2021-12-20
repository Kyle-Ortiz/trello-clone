import React from 'react'
import {useState, useEffect} from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import List from './List';
import Card from './Card';
import { useParams } from "react-router-dom"
import LoggedNav from './LoggedNav';

function ProjectBoard({setUser}) {
     const params = useParams();
     const [lists,setLists] = useState(null);
     // const [cards,setCards] = useState(null);

     useEffect(() => {
          fetch(`/projects/${params.projectId}/lists`).then((res) => {
               if (res.ok) {
                    res.json().then((lists)=> {
                         setLists(lists);
                    });
               }
          })
     },[])


     function listMapper(userLists) {
          const lists = userLists.map((list) => {
               return <List key={list.id} name={list.name}/>
          })
          return lists;
     }

     return (
          <DragDropContext>
                    <div id="project-board">
                         <LoggedNav setUser={setUser}/>
                         <div className="project-board-lists"></div>
                         {lists ? listMapper(lists) : "Loading Project"}
                    </div>
          </DragDropContext>
     )
}

export default ProjectBoard
