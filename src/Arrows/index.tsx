import React from "react";
import styled from "styled-components";

const StyledLine = styled.line`
  stroke: #808292;
`;

type IProps = {
  amount: number;
  maxWidth: number;
};

const Arrows: React.FC<IProps> = ({ amount, maxWidth }) => {
  const renderSingleLine = () => (
    <StyledLine
      x1={maxWidth / 2}
      y1="0"
      x2={maxWidth / 2}
      y2="80"
      markerEnd="url(#arrow)"
    />
  );
  const renderMultipleLines = () => (
    <>
      <StyledLine
        x1={maxWidth / 2}
        y1="0"
        x2={maxWidth / 2}
        y2="40"
      />
      <StyledLine x1="0" y1="40" x2={maxWidth} y2="40" />
      {[...Array(amount)].map((_, i) => {
        const singleWidth = maxWidth / (amount - 1);
        const offset = singleWidth * i;
        return (
          <StyledLine
            x1={offset}
            y1="40"
            x2={offset}
            y2="80"
            markerEnd="url(#arrow)"
          />
        );
      })}
    </>
  );
  return (
    <svg width={maxWidth} style={{ overflow: "visible" }}>
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
          <path d="M0,0 L0,6 L9,3 z" fill="#808292" />
        </marker>
      </defs>
      {amount === 1 && renderSingleLine()}
      {amount > 1 && renderMultipleLines()}
    </svg>
  );
};

export default Arrows;
