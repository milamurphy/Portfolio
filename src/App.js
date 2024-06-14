import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import './index.css';

// TODO replace logo192.png in manifest.json
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gradientSize, setGradientSize] = useState(500);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div id="gradientContainer">
        <div
          id="gradientBackground"
          style={{
            width: `${gradientSize}px`,
            height: `${gradientSize}px`,
            transform: `translate(${mousePosition.x - gradientSize / 2}px, ${
              mousePosition.y - gradientSize / 2
            }px)`,
          }}
        />
      </div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
