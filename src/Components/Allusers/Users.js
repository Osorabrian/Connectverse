import React, {useEffect, useState} from 'react'
import Usercard from './UserCard'

export default function Users(){

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(allUsers => setUsers(allUsers))
    },[])

    const searchUser = users.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase()) || user.username.toLowerCase().includes(search.toLowerCase())
    })

    const names = searchUser.map(user => {
        return(
            <Usercard key={user.id} id={user.id} name={user.name} userName={user.username}/>
        )
    })

    return(
        <div>
            <h1 className='mt-3'>Users</h1>
            <input placeholder='Search User...' type='text' id='search-users' onChange={(e) => {setSearch(e.target.value)}}/>
            {names}
        </div>
    )
}