import './App.css';
import {Routes, Route} from 'react-router-dom'
import MyPosts from '../MyPosts/MyPosts';
import Feed from '../Feed/Feed';
import Users from '../Allusers/Users';
import Navbar from '../NavBar/Navbar';
import Login from '../Login/Login';
import ViewProfile from '../Profile/ViewProfile';
import ViewPost from '../Feed/ViewPost';
import CreatePost from '../MyPosts/CreatePost';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Routes>
        <Route element={<Feed/>} path='/'/>
        <Route element={<Users/>} path='all_users' />
        <Route element={<Login/>} path='log_in' />
        <Route element={<MyPosts/>} path='my_posts' />
        <Route element={<ViewProfile/>} path='my_profile' />
        <Route element={<ViewPost/>} path='/post/:id' />
        <Route element={<ViewPost/>} path='my_posts/post/:id' />
        <Route element={<CreatePost/>} path='my_posts/create' />
      </Routes>
    </div>
  );
}

export default App;
