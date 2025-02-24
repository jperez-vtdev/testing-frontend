import React from 'react';

const Triangle = ({ type = 'up' }) => {
  const isLong = type === 'up';
  const triangleStyle = {
    width: 0,
    height: 0,
    marginTop: '5px',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: isLong ? '15px solid #54EA41' : 'none',
    borderTop: isLong ? 'none' : '15px solid #C50202',
    borderRadius: '4px',
  };

  return (
    <div
      style={{
        ...triangleStyle,
        display: 'inline-block',
        transform: 'scale(1)',
      }}
    />
  );
};

export default Triangle;
