import './App.css';
import {Routes, Route} from 'react-router-dom'
import Feed from '../Feed/Feed';
import Users from '../Allusers/Users';
import Navbar from '../NavBar/Navbar';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Routes>
        <Route element={<Feed/>} path='/'/>
        <Route element={<Users/>} path='all_users' />
        <Route element={<Login/>} path='log_in' />
      </Routes>
    </div>
  );
}

export default App;
