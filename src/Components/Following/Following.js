import React, { useState, useEffect } from 'react'
import Postcard from '../Feed/Postcard'
import { useDataStore } from '../../State/state'

export default function Following(){

    const following = useDataStore(state => state.following)
    const followingPosts = []
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => setPosts(posts))
    },[])

    for(let i = 0; i < posts.length; i++){
        for(let n = 0; n < following.length; n++){
             if(posts[i].userId === following[n]){
                followingPosts.push(posts[i])
             }
        }
    }

    const allPosts = followingPosts.map((post) => {
        return (
            <Postcard key={post.id} id={post.id} title={post.title} body={post.body}/>
        )
    })

    return(
        <div>
            <h1>Following</h1>
            <div className='row'>
                {allPosts}
            </div>
        </div>
    )
}