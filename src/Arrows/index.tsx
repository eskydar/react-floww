import React from "react";
import styled from "styled-components";

const StyledLine = styled.line`
  shape-rendering: crispEdges;
`;

type IProps = {
  amount: number;
  maxWidth: number;
};

const Arrows: React.FC<IProps> = ({ amount, maxWidth }) => {
  const renderSingleLine = () => (
    <StyledLine
      stroke="red"
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
        stroke="red"
        x1={maxWidth / 2}
        y1="0"
        x2={maxWidth / 2}
        y2="40"
      />
      <StyledLine stroke="red" x1="0" y1="40" x2={maxWidth} y2="40" />
      {[...Array(amount + 1)].map((_, i) => {
        const singleItemWidth = maxWidth / amount;
        return (
          <StyledLine
            stroke="red"
            x1={maxWidth - singleItemWidth * i}
            y1="40"
            x2={maxWidth - singleItemWidth * i}
            y2="80"
            markerEnd="url(#arrow)"
          />
        );
      })}
    </>
  );
  return (
    <svg width={maxWidth}>
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
          <path d="M0,0 L0,6 L9,3 z" fill="red" />
        </marker>
      </defs>
      {amount === 1 && renderSingleLine()}
      {amount > 1 && renderMultipleLines()}
    </svg>
  );
};

export default Arrows;
