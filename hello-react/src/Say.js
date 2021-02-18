import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('기본');
  const onClickEnter = () => setMessage('안냥');
  const onClickLeave = () => setMessage('빠빠');

  const [color, setColor] = useState('black');

  const [colorName, setColorName] = useState('검정');
  const onClickRed = () => {
    setColorName('빨강');
    setColor('red');
  };
  const onClickGreen = () => {
    setColorName('초록');
    setColor('green');
  };
  const onClickBlue = () => {
    setColorName('파랑');
    setColor('blue');
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>
        {colorName} {message}
      </h1>
      <button style={{ color: 'red' }} onClick={onClickRed}>
        빨강
      </button>
      <button style={{ color: 'green' }} onClick={onClickGreen}>
        초록
      </button>
      <button style={{ color: 'blue' }} onClick={onClickBlue}>
        파랑
      </button>
    </div>
  );
};

export default Say;
