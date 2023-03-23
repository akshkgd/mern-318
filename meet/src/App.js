import './App.css';
import {Routes, Route} from "react-router-dom"
import Navigation from './components/Navigation';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import AddMeeting from './pages/AddMeeting'
function App() {
  return (
    <div className="App">
     <Navigation />



      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-meeting' element={<AddMeeting/>} />
        <Route path='*' element={<NotFound/>} />

      </Routes>
    </div>



  );
}

export default App;
