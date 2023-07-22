import React, { useEffect, useState } from "react";
import './Feed.css'

export default function Postcard({id, title, body}){

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(comments => setComments(comments))
    })
    
    return(
        <div className="card" id='postcard'>

            <div className ="card-body">

                <div className="card-title">
                    <h1>{title}</h1>
                </div>

                <div className="card-text">{body}</div>

                <hr></hr>

               <div className="row">
                    <div className="col-6">
                        <i className="fa-regular fa-heart fa-beat" style={{color:" #161cd0"}}></i>
                    </div>
                    <div className="col-6 row">
                        <i className="fa-regular fa-comment fa-bounce col-2" style={{color: "#38ad3a"}}></i><p className="col-2">{comments.length}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}