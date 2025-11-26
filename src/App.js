// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const changeColor = () => {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(color);
  };

  return (
    <div 
      className="body" 
      style={{ background: backgroundColor }}
      onClick={changeColor}
    >
      <div className="info">
        <h1>Генератор цветов</h1>
        <p>Кликни чтобы поменять цвет</p>
        <p>Текущий цвет: <span id="colorText">{backgroundColor}</span></p>
        <div 
          className="color-box" 
          id="colorBox"
          style={{ background: backgroundColor }}
        ></div>
      </div>
    </div>
  );
}

export default App;