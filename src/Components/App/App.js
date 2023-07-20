import './App.css';
import {Routes, Route} from 'react-router-dom'
import Feed from '../Feed/Feed';
import Navbar from '../NavBar/Navbar';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Routes>
        <Route element={<Feed/>} path='/'/>
      </Routes>
    </div>
  );
}

export default App;
