import React from 'react'
// import List from './List'
// import {useState, useEffect} from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import List from './List';
import Card from './Card';

function ProjectBoard({projectId}) {
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
          // <DragDropContext>
          //           <div id="project-board">
          //                {projectId}
          //                <List cards={[1,2,3]} />
          //           </div>
          // </DragDropContext>
          <div>test</div>
     )
}

export default ProjectBoard
