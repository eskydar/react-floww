import React from "react";

type IProps = {
  amount: number;
};

const Arrows: React.FC<IProps> = ({ amount }) => {
  const width = amount * 160;
  const renderSingleLine = () => (
    <line
      stroke="red"
      x1="160"
      y1="0"
      x2="160"
      marker-end="url(#arrow)"
    />
  );
  const renderMultipleLines = () => (
    <>
      <line stroke="red" x1="160" y1="0" x2="160" y2="40" />
      <line stroke="red" x1="0" y1="40" x2={width} y2="40" />
    </>
  );
  return (
    <svg width={`${width}px`}>
      <defs>
        <marker
          id="arrow"
          markerWidth="10"
          markerHeight="10"
          refX="0"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L9,3 z" fill="#f00" />
        </marker>
      </defs>
      {amount === 1 && renderSingleLine()}
      {amount > 1 && renderMultipleLines()}
    </svg>
  );
};

export default Arrows;
