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

     return (
          <div>
               <LoggedNav />
          </div>
     )
}

export default Dashboard
