import { ChangeEvent, useState } from 'react';

const ColorConverter = () => {
  const [hexColor, setHexColor] = useState('');
  const [rgbColor, setRgbColor] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleHexChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputHex = event.target.value;
    setHexColor(inputHex);

    if (inputHex.length === 7) {

      if (inputHex.match(/^#[0-9A-Fa-f]{6}$/)) {
        setIsValid(true);
        const r = parseInt(inputHex.slice(1, 3), 16);
        const g = parseInt(inputHex.slice(3, 5), 16);
        const b = parseInt(inputHex.slice(5, 7), 16);
        setRgbColor(`RGB: ${r}, ${g}, ${b}`);
        document.body.style.backgroundColor = inputHex;

      } else {
        setIsValid(false);
        document.body.style.backgroundColor = 'red';
      }
  } else {
    setIsValid(true);
    setRgbColor('')
    document.body.style.backgroundColor = 'white';
  }
  };

  return (
    <div className='centered-container'>
    <div className='container'>
      <input
        className='input'
        type="text"
        value={hexColor}
        onChange={handleHexChange}
        style={{ borderColor: isValid ? 'initial' : 'red' }}
      />
      <div className='message-container'>   
        {!isValid && <p className='error' style={{ color: 'black' }}>Ошибка!</p>}
        {rgbColor && <p className='rgb'>{rgbColor}</p>}
      </div>   
    </div>
    </div>
  );
};

export default ColorConverter;
