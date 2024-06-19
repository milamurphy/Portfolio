import React, { useState, useEffect, useContext } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import { ThemeProvider, ThemeContext } from './ThemeContext';

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

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const gradientBackgroundStyle = {
    width: `${gradientSize}px`,
    height: `${gradientSize}px`,
    transform: `translate(${mousePosition.x - gradientSize / 2}px, ${mousePosition.y - gradientSize / 2}px)`,
    backgroundColor: theme === 'light' ? '#287943' : '#638c71'
  };

  return (
    <div className={`App ${theme}`}>
      <div id="gradientContainer">
        <div
          id="gradientBackground"
          style={gradientBackgroundStyle}
        />
      </div>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
