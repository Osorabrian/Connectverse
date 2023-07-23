import React, { useState, useEffect } from 'react'
import Postcard from '../Feed/Postcard'
import { useDataStore } from '../../State/state'

export default function Following(){

    const following = useDataStore(state => state.following)
    const followingPosts = []
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')

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

    const data = followingPosts.filter(post => {
        return post.title.toLowerCase().includes(search.toLowerCase())
    })

    const allPosts = data.map((post) => {
        return (
            <Postcard key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body}/>
        )
    })

    if(following.length === 0){
        return(
        <div>
            <h1 className='mt-3'>Following</h1>
            <input type={'text'} placeholder='Search Post...' id='search-bar' onChange={(e) => {setSearch(e.target.value)}}/>
            <h3 className='mt-5'>Oops! Please follow other user to view their posts</h3>
        </div>)
    }

    return(
        <div>
            <h1 className='mt-3'>Following</h1>
            <input type={'text'} placeholder='Search Post...' id='search-bar' onChange={(e) => {setSearch(e.target.value)}}/>
            <div className='row mt-3'>
                {allPosts}
            </div>
        </div>
    )
}