import React from "react";

export default function AddressInfo({street, suite, zipCode, city, latitude, longitude}){
    return(
        <>
            <h1>Address</h1>
            <div className="row">
                <label className='col-4'>Street:</label>
                <p className="col-6">{street}</p>
            </div>
            <div className="row">
                <label className='col-4'>Suite:</label>
                <p className="col-6">{suite}</p>
            </div>
            <div className="row">
                <label className='col-4'>City:</label>
                <p className="col-6">{city}</p>
            </div>
            <div className="row">
                <label className='col-4'>ZipCode:</label>
                <p className="col-6">{zipCode}</p>
            </div>
            <div className="row">
                <label className='col-4'>Latitude:</label>
                <p className="col-6">{latitude}</p>
            </div>
            <div className="row">
                <label className='col-4'>Longitude:</label>
                <p className="col-6">{longitude}</p>
            </div>
        </>
    )
}