import React from 'react';

export const LeftArrow = ({ arrowClass }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={arrowClass}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z"
      ></path>
    </svg>
  );
};
