import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewPost(){

    const {id} = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(post => setPost(post))
    },[id])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(comments => setComments(comments))
    },[id])

    const commentList = comments.map((comment) => {
        return(
            <div key={comment.id}>
                <div className="row">
                    <i className="fa-solid fa-user-astronaut col-1" style={{color: '#84c71f'}} id='profile-avatar'></i>
                    <strong className="col-11">{comment.name}</strong>
                </div>
                <p>{comment.body}</p>
                <hr></hr>
            </div>
        )
    })

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <div className="row">
                    <div className="col-6">
                        <i className="fa-regular fa-heart fa-beat" style={{color:" #161cd0"}}></i>
                    </div>
                    <div className="col-6 row">
                        <i className="fa-regular fa-comment fa-bounce col-2" style={{color: "#38ad3a"}}></i><p className="col-2">{comments.length}</p>
                    </div>
            </div>
            <hr></hr>
            <h1>Comments</h1>
            {commentList}
        </div>
    )
}