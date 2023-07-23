import React, { useState } from "react";
import { useDataStore } from "../../State/state";
import { useNavigate } from "react-router-dom";
import './myposts.css'

export default function CreatePost(){

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigate = useNavigate()
    const user = useDataStore(state => state.user)
    const post = useDataStore(state => state.setPost)

    function handleCreate(e){
        e.preventDefault()
        const postData = {userId: user.id, title, body}
        post(postData)
        navigate('/my_posts')
    }

    return(
        <div>
            <h1 className="mt-5">Create A Post</h1>
            <form onSubmit={handleCreate} id='create-form'>

            <div className="mb-3">
                <label className="form-label">Title:</label>
                <input type='text' className="form-control" placeholder='Enter Name' onChange={e => setTitle(e.target.value)} required/>
            </div>
                
            <div className="mb-3">
                <label className="form-label">Body:</label>
                <textarea type='text' className="form-control" rows={5} placeholder='Enter Username' onChange={e => setBody(e.target.value)} required/>
            </div> 
                
            <div style={{textAlign: 'center'}}>
                <button className="btn btn-primary" type='submit'>Create Post</button>
            </div>

            </form>
        </div>
        
    )
}