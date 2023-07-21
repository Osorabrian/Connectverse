import './App.css';
import {Routes, Route} from 'react-router-dom'
import MyPosts from '../MyPosts/MyPosts';
import Feed from '../Feed/Feed';
import Users from '../Allusers/Users';
import Navbar from '../NavBar/Navbar';
import Login from '../Login/Login';
import ViewProfile from '../Profile/ViewProfile';

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
      </Routes>
    </div>
  );
}

export default App;
