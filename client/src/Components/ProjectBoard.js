import React from 'react'
// import List from './List'
// import {useState, useEffect} from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import List from './List';
import Card from './Card';
import { useParams } from "react-router-dom"
import LoggedNav from './LoggedNav';

function ProjectBoard({setUser}) {
     const params = useParams();
     // const [lists,setLists] = useState(null);
     // const [cards,setCards] = useState(null);

     // useEffect(() => {
     //      fetch(`/projects/${projectId}`).then((res) => {
     //           if (res.ok) {
     //                res.json().then((project)=> {
     //                     setLists(project.lists);
     //                     setCards(project.cards);
     //                });
     //           }
     //      })
     // },[])


     // function listMapper(lists) {
     //      const lists = lists.map((list) => {
     //           <List key={list.id} />
     //      })
     // }

     return (
          <DragDropContext>
                    <div id="project-board">
                         {params.projectId}
                         {/* <List cards={[1,2,3]} /> */}
                    </div>
          </DragDropContext>
     )
}

export default ProjectBoard
