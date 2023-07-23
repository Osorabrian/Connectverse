import React, {useState, useEffect} from "react";
import Postcard from "./Postcard";
import './Feed.css'
import GooglePay from "./GooglePay";
import { useDataStore } from "../../State/state";

export default function Feed(){

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const subscription = useDataStore(state => state.subscription)

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
            <Postcard key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body}/>
        )
    })

    const limitedPosts = allPosts.slice(0,20)

    if(!posts){
        return ("Loading...")
    }

    return(
        <>
            <h1 className="mt-3">Feed</h1>
            <input type={'text'} placeholder='Search Post...' id='search-bar' onChange={(e) => {setSearch(e.target.value)}}/>
            <div>
                {
                    subscription ? (
                        <div className="row">
                            {allPosts}
                            
                        </div>
                    ):(
                        <div className="row">
                            {limitedPosts}
                            <hr id='hr'></hr>
                            <GooglePay/>
                        </div>
                    )
                }
            
            </div>
        </>
    )
}