import React from "react";
import styled from "styled-components";
import { FaQuestionCircle } from "react-icons/fa";

import Connector from "../Connector";
import Arrows from "../Arrows";

const width = 320;

const StyledContainer = styled.div`
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  position: absolute;
`;

const StyledBlock = styled.div`
  width: ${width}px;
  box-shadow: 0px 4px 30px rgba(22, 33, 74, 0.3);
  font-family: "Roboto";
  position: relative;
  box-sizing: border-box;
  background: white;
`;

const StyledTitle = styled.div`
  padding: 17px;
  border-bottom: 1px solid #e9e9ef;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  color: #253134;
`;

const StyledDescription = styled.div`
  padding: 17px;
  font-size: 14px;
  color: #808292;
`;

const StyledIconWrapper = styled.span`
  color: #217ce8;
  font-size: 25px;
  display: flex;
  margin-right: 8px;
`;

interface IProps {
  title: string;
  description: string;
  attaching?: boolean;
  connections?: number;
  position?: any;
}

const TestComponent: React.FC<IProps> = ({
  title,
  description,
  attaching = false,
  connections = 0,
  position = {}
}) => {
  const maxWidth = connections > 2 ? (width + (connections * 20)) * (connections - 1) : width + (connections * 20);
  const offsetLeft = connections > 1 ? maxWidth / 2 - width / 2 : 0;
  return (
    <StyledContainer top={position.top} left={position.left || offsetLeft}>
      <StyledBlock>
        <StyledTitle>
          <StyledIconWrapper>
            <FaQuestionCircle />
          </StyledIconWrapper>
          {title}
        </StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        {attaching && <Connector />}
      </StyledBlock>
      {connections > 0 && <Arrows amount={connections} maxWidth={maxWidth} />}
    </StyledContainer>
  );
};

export default TestComponent;
