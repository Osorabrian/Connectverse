import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {BsBoxArrowInRight} from 'react-icons/bs'
import './Login.css'

export default function Login(){

    const [users, setUsers] = useState([])
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usersData => setUsers(usersData))
    })

    function handleLogIn(e){
        e.preventDefault()
        for(let i = 0; i < users.length; i++){
            if(users[i].username === userName && users[i].address.zipcode === password){
                navigate('/')
            }else{
                console.log('wrong')
            }
        }
        console.log(users)
        
    }

    return(
        <div>

            <h1 className='mt-5'>Log In</h1>

            <form id='login-form' className='mt-2' onSubmit={handleLogIn}>
                <div className='mb-4'>
                    <label className='form-label'>Username:</label>
                    <input type='text' placeholder='Enter Username' className='form-control' required onChange={(e) => {setUserName(e.target.value)}}/>
                </div>

                <div className='mb-5'>
                    <label className='form-label'>Password:</label>
                    <input type='Password' placeholder='Enter Password' className='form-control' required onChange={(e) => {setPassword(e.target.value)}}/>
                </div>

                <div id='login-button' >
                    <button className='btn btn-primary' type='submit'>Log In    <BsBoxArrowInRight/></button>
                </div>
               
            </form>
        </div>
    )
}