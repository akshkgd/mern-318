import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
function App() {

  return (
    <div>
    <nav>
      <h2>Splash</h2>

      <div className='links'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About Us</Link>
        <Link to={'/contact'}>Contact Us</Link>
        
      </div>
    </nav>

    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<NotFound/>} />
    </Routes>
    </div>
    
  );
}

export default App;
