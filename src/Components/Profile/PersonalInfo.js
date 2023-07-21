import React from "react";

export default function PerosnalInfo({name, userName, email, phone, website}){
    return(
        <>
            <h1>Perosnal Information</h1>

            <div className="row">
                <label className='col-4'> Name:</label>
                <p className="col-6">{name}</p>
            </div>

            <div className="row">
                <label className='col-4'>User Name:</label>
                <p className="col-6">{userName}</p>
            </div>

            <div className="row">
                <label className='col-4'>Email:</label>
                <p className="col-6">{email}</p>
            </div>

            <div className="row">
                <label className='col-4'>Phone:</label>
                <p className="col-6">{phone}</p>
            </div>

            <div className="row">
                <label className='col-4'>Website:</label>
                <p className="col-6">{website}</p>
            </div>
        </>
    )
}