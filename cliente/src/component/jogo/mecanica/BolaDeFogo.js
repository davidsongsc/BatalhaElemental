import React from 'react';

const BolaDeFogo = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="rotate(0 50 50)">
        {/* Corpo da bola de fogo */}
        <circle cx="50" cy="50" r="40" fill="orange" />

        {/* Chamas da bola de fogo */}
        <path
          d="M50 20
             Q45 35 50 50
             T50 80
             Q55 65 50 50
             T50 20"
          fill="red"
          opacity="0.8"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="2s"
            repeatCount="indefinite"
            keyTimes="0;0.5;1"
            values="0 50 50; 45 50 50; 0 50 50"
          />
        </path>
      </g>
    </svg>
  );
};

export default BolaDeFogo;
