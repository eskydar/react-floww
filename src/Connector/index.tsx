import React from "react";
import styled from "styled-components";

const StyledConnector = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #217ce8;
  margin-top: -5px;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  transform: scale(1);
  position: absolute;
  left: calc(50% - 12px);

  &:after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: #217ce8;
    transform: scale(1.7);
    opacity: 0.2;
    border-radius: 50%;
  }
`;

type IProps = {};

const Connector: React.FC<IProps> = () => <StyledConnector />;

export default Connector;
