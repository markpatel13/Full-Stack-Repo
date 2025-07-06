import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = `${currentTime.getMonth() + 1}/${currentTime.getDate()}/${currentTime.getFullYear()}`;
  const formattedTime = currentTime.toLocaleTimeString(); // <-- Shows actual time like 10:15:45 AM

  return (
    <div className="app-container">
      <h1>Welcome to CHARUSAT!!!!</h1>
      <h2>It is {formattedDate}</h2>
      <h2>It is {formattedTime}</h2> {/* Show time */}
    </div>
  );
}

export default App;