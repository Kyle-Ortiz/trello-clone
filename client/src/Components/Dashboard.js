import React from 'react'
import LoggedNav from './LoggedNav'
import {useEffect,useState} from 'react'

function Dashboard({user}) {
     const[errors,setErrors] = useState(null);
     const[userProjects,setUserProjects] = useState(null);

     useEffect(() => {
          fetch(`/projects/${user.id}`).then((r) => {
               if (r.ok) {
                    r.json().then((projects) => {setUserProjects(projects)})
               }
               else {
                    r.json().then((errors)=> setErrors(errors))
               }
          })
     }, [])

     const requestProjects = () => {
          fetch(`/projects/${user.id}`).then((r) => {
               if (r.ok) {
                    r.json().then((projects) => {setUserProjects(projects)})
                    console.log(projects)
               }
               else {
                    r.json().then((errors)=> setErrors(errors))
                    console.log(errors)
               }
          })
     }
     return (
          <div>
               <LoggedNav />
               <button onClick={() => requestProjects}>Click</button>
          </div>
     )
}

export default Dashboard
