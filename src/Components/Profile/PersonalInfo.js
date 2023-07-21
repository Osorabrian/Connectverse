import React from "react";

export default function PerosnalInfo(){
    return(
        <>
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
        </>
    )
}