import React from "react";
import './Feed.css'

export default function Postcard({title, body}){
    
    return(
        <div className="card" id='postcard'>
            <div className ="card-body">
                <div className="card-title">
                   <h1>{title}</h1>
                </div>
                <div className="card-text">{body}</div>
            </div>
        </div>
    )
}