import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Feed.css'

export default function ViewPost(){

    const {id} = useParams()
    const [post, setPost] = useState({})
    const [like, setLike] = useState(0)
    const [likeColor, setLikeColor] = useState(false)
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(post => setPost(post))
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(comments => setComments(comments))
    })

    const commentList = comments.map((comment) => {
        return(
            <div key={comment.id} id='comment'>
                <div className="row">
                    <i className="fa-solid fa-user-astronaut col-1" style={{color: '#84c71f'}} id='profile-avatar'></i>
                    <p className="col-8">{comment.email}</p>
                </div>
                <strong>{comment.name}</strong>
                <p>{comment.body}</p>
                <hr></hr>
            </div>
        )
    })

    return(
        <div id='post-view'>
            <h1 className="mt-5">{post.title}</h1>
            <p>{post.body}</p>
            <div className="row" >
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
            <hr></hr>
            <h1 className="mb-5">Comments</h1>
            {commentList}
        </div>
    )
}