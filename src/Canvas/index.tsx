import React from "react";
import styled from "styled-components";

const StyledCanvas = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  background-image: radial-gradient(
    rgba(128, 130, 146, 0.2) 1px,
    transparent 0
  );
  background-size: 10px 10px;
  background-position: -19px -19px;
  border: 1px solid rgba(128, 130, 146, 0.2);
`;

const Canvas: React.FC = (props: any) => {
  return <StyledCanvas {...props} />;
};

export default Canvas;
