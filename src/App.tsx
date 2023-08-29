import React, { useState } from 'react';

const ColorConverter = () => {
  const [hexColor, setHexColor] = useState('');
  const [rgbColor, setRgbColor] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleHexChange = (event) => {
    const inputHex = event.target.value;
    setHexColor(inputHex);

    if (inputHex.match(/^#[0-9A-Fa-f]{6}$/)) {
      setIsValid(true);
      const r = parseInt(inputHex.slice(1, 3), 16);
      const g = parseInt(inputHex.slice(3, 5), 16);
      const b = parseInt(inputHex.slice(5, 7), 16);
      setRgbColor(`RGB: ${r}, ${g}, ${b}`);
      document.body.style.backgroundColor = inputHex;
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className='container'>
      <h2></h2>
      <input
        className='input'
        type="text"
        value={hexColor}
        onChange={handleHexChange}
        maxLength={7}
        style={{ borderColor: isValid ? 'initial' : 'red' }}
      />
      {!isValid && <p className='error' style={{ color: 'red' }}>Invalid HEX color format</p>}
      <p className='rgb'>{rgbColor}</p>
    </div>
  );
};

export default ColorConverter;
