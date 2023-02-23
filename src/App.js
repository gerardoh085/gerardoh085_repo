import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Poster1 from './pages/Poster1';
import Poster2 from './pages/Poster2';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {

  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/post1' element={<Poster1/>}/>
          <Route path='/post2' element={<Poster2/>}/>
          <Route path='/project/:id' element={<ProjectDisplay/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
