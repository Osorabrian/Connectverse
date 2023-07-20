import React, {useEffect, useState} from 'react'
import Usercard from './UserCard'

export default function Users(){

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(allUsers => setUsers(allUsers))
    },[])

    // const names = users.map(user => {
    //     return(
    //         <li key={user.id}>{user.name}</li>
    //     )
    // })

    return(
        <div>
            <h1>Users</h1>
           <Usercard/>
        </div>
    )
}