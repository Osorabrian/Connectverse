import React from "react";
import './profile.css'

export default function ViewProfile(){
    return(
        <>
        <h1>My Profile</h1>
        <i class="fa-solid fa-user-astronaut fa-2xl" style={{color: '#84c71f'}} id='profile-avatar'></i>
        <hr></hr>
        <h1>Perosnal Information</h1>

        <div className="row">
            <label className='col-4'> Name:</label>
            <p className="col-6">Brian Osora</p>
        </div>

        <div className="row">
            <label className='col-4'>User Name:</label>
            <p className="col-6">Osoch</p>
        </div>
        
        <div className="row">
            <label className='col-4'>Email:</label>
            <p className="col-6">osorabrian@gmail.com</p>
        </div>
        
        <div className="row">
            <label className='col-4'>Phone:</label>
            <p className="col-6">Brian Osora</p>
        </div>

        <div className="row">
            <label className='col-4'>Website:</label>
            <p className="col-6">Brian Osora</p>
        </div>
        
        <hr></hr>
        <h1>Address</h1>
        <hr></hr>
        <h1>Company</h1>
        </>
    )
}