import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom'
import './Feed.css'

export default function Postcard({userId, id, title, body}){

    const [comments, setComments] = useState([])
    const [user, setUser] = useState({})
    const [likeColor, setLikeColor] = useState(false)
    const [like, setLike] = useState(0)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(comments => setComments(comments))
    },[id])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => setUser(user))
    })
    
    return(
        <div className="card h-60" id='postcard'>

            <div className ="card-body" id='card-body'>

            <div className="row">
                <div className="col-2">
                    <i className="fa-solid fa-user-ninja" style={{color: "#d0f80d"}}></i>
                </div>
                <div className="col-10">
                    @{user.name}
                </div>
            </div>

            <hr></hr>

            <NavLink to={`post/${id}`} id="redirect">
                <div className="card-title">
                    <h5>{title}</h5>
                </div>

                <div className="card-text">
                    {body}
                </div>
            </NavLink>
                  
                
                <hr></hr>

               <div className="row">
                    <div className="col-6">
                        {
                            !likeColor && (
                                <div className="row">
                                    <i className="fa-regular fa-heart fa-beat col-2" style={{color:" rgb(255, 0, 0)"}} onClick={() => {setLikeColor(true); setLike(like + 1)}}></i>
                                    <p className="col-4">{like}</p>
                                </div>   
                            )
                        }
                        {
                            likeColor && (
                                <div className="row">
                                    <i className="fa-solid fa-heart fa-beat col-2" style={{color: "#ec0936"}} onClick={() => {setLikeColor(false); setLike(0)}}></i>
                                    <p className="col-4">{like}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-6 row">
                        <i className="fa-regular fa-comment fa-bounce col-2" style={{color: "#38ad3a"}}></i><p className="col-2">{comments.length}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}