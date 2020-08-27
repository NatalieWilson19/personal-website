import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'


function App() {
  return (
    <div className="App">
      <NavMenu />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
