import React from 'react';

const CircularProgress = ({ percentage, radius, strokeWidth, color }) => {
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center mr-2 " >
      <svg
        height="120"
        width="150"
        className="absolute"
      >
        <circle
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
        />
        <circle
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          style={{ strokeDasharray: circumference, strokeDashoffset }}
          strokeLinecap="round"
        />
      </svg>
      <div
        className="absolute flex flex-col items-center justify-center text-white mr-6"
        style={{ lineHeight: 1 }}
      >
        <div className="text-2xl font-bold">{percentage}%</div>
        <div className="text-sm">Completion</div>
      </div>
    </div>
  );
};

export default CircularProgress;
