import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {BsBoxArrowInRight} from 'react-icons/bs'
import './Login.css'

export default function Login(){

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleLogIn(e){
        e.preventDefault()
        const logIn = {username: userName, password}
        console.log(logIn)
        navigate('/')
    }

    return(
        <div>

            <h1 className='mt-5'>Log In</h1>

            <form id='login-form' className='mt-2' onSubmit={handleLogIn}>
                <div className='mb-4'>
                    <label className='form-label'>Username:</label>
                    <input type='text' placeholder='Enter Username' className='form-control' onChange={(e) => {setUserName(e.target.value)}}/>
                </div>

                <div className='mb-5'>
                    <label className='form-label'>Password:</label>
                    <input type='Password' placeholder='Enter Password' className='form-control' onChange={(e) => {setPassword(e.target.value)}}/>
                </div>

                <div id='login-button' >
                    <button className='btn btn-primary' type='submit'>Log In    <BsBoxArrowInRight/></button>
                </div>
               
            </form>
        </div>
    )
}