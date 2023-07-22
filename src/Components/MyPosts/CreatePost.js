import React, { useState } from "react";
import { useDataStore } from "../../State/state";
import { useNavigate } from "react-router-dom";

export default function CreatePost(){

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigate = useNavigate()
    const user = useDataStore(state => state.user)

    function handleCreate(e){
        e.preventDefault()
        const postData = {userId: user.id, title, body}
        
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'content-type': 'Application/json'
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        navigate('/my_posts')
    }

    return(
        <form onSubmit={handleCreate}>
                <label className="form-label">Title:</label>
                <input type='text' className="form-control" placeholder='Enter Name' onChange={e => setTitle(e.target.value)} required/>
               
                <label className="form-label">Body:</label>
                <textarea type='text' className="form-control" rows={5} placeholder='Enter Username' onChange={e => setBody(e.target.value)} required/>

            <button type='submit'>Create Post</button>

        </form>
    )
}