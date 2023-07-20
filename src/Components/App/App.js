import './App.css';
import {Routes, Route} from 'react-router-dom'
import Feed from '../Feed/Feed';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Feed/>} path='/'/>
      </Routes>
    </div>
  );
}

export default App;
