import React from "react";
import Canvas from "../Canvas";
import Block from "../Block";

type IProps = {
  config: any;
};

const Flow: React.FC<IProps> = ({ config }) => {
  const renderBlocks = (block: any) => {
    const children = [];
    if (block.children) {
      block.children.map(child => {
        children.push(renderBlocks(child));
      });
    }
    return (
      <>
        <Block
          position={block.position}
          title={block.title}
          description={block.description}
          key={block.id}
          connections={(block.children || []).length}
        />
        {children}
      </>
    );
  };
  return (
    <>
      <Canvas>{renderBlocks(config)}</Canvas>
    </>
  );
};

export default Flow;
