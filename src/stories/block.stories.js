import React from "react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import Block from "../Block";

export default {
  title: "Block",
  decorators: [withKnobs]
};

export const Default = () => {
  const attaching = boolean('Attaching', false);
  const connections = number('Connections', 0);
  return (
    <Block
      title="Shoulder pain?"
      description="Some description"
      attaching={attaching}
      connections={connections}
    />
  );
};
