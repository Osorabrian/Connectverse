import React from "react";

export default function CompanyInfo({name, catchPhrase, bs}){
    return(
        <>
            <h1>Company</h1>
            <div className="row">
                <label className="col-4">Name:</label>
                <p className="col-6">{name}</p>
            </div>
            <div className="row">
                <label className="col-4">CatchPhrase:</label>
                <p className="col-6">{catchPhrase}</p>
            </div>
            <div className="row">
                <label className="col-4">Bs:</label>
                <p className="col-6">{bs}</p>
            </div>
        </>
    )
}
