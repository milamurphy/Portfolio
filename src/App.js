import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

// TODO replace logo192.png in manifest.json
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
