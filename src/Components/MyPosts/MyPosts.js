import React, {useState, useEffect} from 'react'
import Postcard from '../Feed/Postcard'
import '../Feed/Feed.css'
import { useDataStore } from '../../State/state'

export const MyPosts = () => {

    const user = useDataStore((state) => state.user)
    const [search, setSearch] = useState('')
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => setPosts(posts))
    },[])

    const myPosts = posts.filter((post) => post.userId === user.id)
    
    const searchPost = myPosts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase())).map((post) => {
        return(
            <Postcard key={post.id} title={post.title} body={post.body}/>
        )
    })
    
  return (
    <div>
        <h1>My Posts</h1>
        <input type={'text'} placeholder='Search My Posts...' id='search-bar' onChange={(e) => {setSearch(e.target.value)}}/>
        {searchPost}
    </div>
  )
}
