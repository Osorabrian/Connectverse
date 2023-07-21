import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {BsBoxArrowInRight} from 'react-icons/bs'
import './Login.css'
import { useDataStore, useTextStore } from '../../State/state'

export default function Login(){

    const [users, setUsers] = useState([])
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const isLoggedIn = useTextStore((state) => state.setIsLoggedIn)
    const userId = useDataStore((state) => state.setUser)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usersData => setUsers(usersData))
    })

    function handleLogIn(e){
        e.preventDefault()
        let ans ;
        for(let i = 0; i < users.length; i++){
            if(users[i].username === userName && users[i].address.zipcode === password){
                ans = 1
                userId(users[i])
            }
        }   
        if(ans === 1){
          isLoggedIn()
          navigate('/')
        }else{
            setError(true)
        }
    }

    return(
        <div>

            <h1 className='mt-5'>Log In</h1>

            <form id='login-form' className='mt-2' onSubmit={handleLogIn}>

                {
                    error && (
                    
                            <div id='error-div'>
                                <p> * Invalid Username or Password Try Again</p>
                            </div>
                        
                    )
                }

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