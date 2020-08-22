import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'


function App() {
  return (
    <div className="App">
      <NavMenu />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
