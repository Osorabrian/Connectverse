import React, {useState, useEffect} from "react";
import Postcard from "./Postcard";
import './Feed.css'
import { useTextStore } from "../../State/state";

export default function Feed(){

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const logIn = useTextStore((state) => state.isLoggedIn)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => setPosts(posts))
    },[])

    const data = posts.filter(post => {
        return post.title.toLowerCase().includes(search.toLowerCase())
    })

    const allPosts = data.map((post) => {
        return(
            <Postcard key={post.id} id={post.id} title={post.title} body={post.body}/>
        )
    })

    const limitedPosts = allPosts.slice(0,20)

    if(!posts){
        return ("Loading...")
    }

    return(
        <>
            <h1>Feed</h1>
            <input type={'text'} placeholder='Search Post...' id='search-bar' onChange={(e) => {setSearch(e.target.value)}}/>
            <div>
                {
                    logIn ? (
                        <div className="row">
                            {allPosts}
                        </div>
                    ):(
                        <div className="row">
                            {limitedPosts}
                        </div>
                    )
                }
            </div>
        </>
    )
}