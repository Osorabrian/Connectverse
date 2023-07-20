import React, {useState, useEffect} from "react";
import Postcard from "./Postcard";
import './Feed.css'

export default function Feed(){

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => setPosts(posts))
    },[])

    const data = posts.filter(post => {
        return post.title.toLowerCase().includes(search.toLowerCase())
    })

    const postData = data.map((post) => {
        return(
            <Postcard key={post.id} title={post.title} body={post.body}/>
        )
    })

    if(!posts){
        return ("Loading...")
    }

    return(
        <>
            <h1>Feed</h1>
            <input type={'text'} placeholder='Search Post...' id='search-bar' onChange={(e) => {setSearch(e.target.value)}}/>
            <div className="row">
                {postData}
            </div>
        </>
    )
}