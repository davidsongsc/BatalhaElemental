import React from 'react';

const MarAberto = () => {
  return (
    <svg
      viewBox="0 0 800 600"
      width="100%"
      height="92vh"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ondas */}
      <path
        d="M0 200 Q 100 150 200 200 T 400 200 T 600 200 T 800 200 V 600 H 0 Z"
        fill="#0099ff"
      >
        <animate
          attributeName="d"
          dur="4s"
          repeatCount="indefinite"
          keyTimes="0;0.5;1"
          values="M0 200 Q 100 250 200 200 T 400 150 T 600 200 T 800 250 V 600 H 0 Z;
                  M0 200 Q 100 150 200 200 T 400 250 T 600 200 T 800 150 V 600 H 0 Z;
                  M0 200 Q 100 250 200 200 T 400 150 T 600 200 T 800 250 V 600 H 0 Z"
        />
      </path>
      {/* Sol */}
      <circle cx="750" cy="100" r="30" fill="#ffd700" />
    </svg>
  );
};

export default MarAberto;
