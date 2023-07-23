import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import Postcard from '../Feed/Postcard'
import '../Feed/Feed.css'
import { useDataStore } from '../../State/state'

export default function MyPosts(){

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
            <Postcard key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body}/>
        )
    })
    
  return (
    <div>
        <h1 className='mt-3'>My Posts</h1>
        <NavLink className='btn btn-primary mb-3' to='/my_posts/create'>Create Post   <i className="fa-solid fa-plus" style={{color: "#ffffff"}}></i></NavLink><br></br>
        <input type={'text'} placeholder='Search My Posts...' id='search-bar' onChange={(e) => {setSearch(e.target.value)}}/>
        <div className='row'>
            {searchPost}
        </div>
    </div>
  )
}
