import React from 'react';
import { Routes, Route, Link} from 'react-router-dom'
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Works from './components/Works';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<div><Home /> <About /> <Skills />  <Works /> </div>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
