import React from "react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import Flow from "../Flow";

export default {
  title: "App|Flow",
  decorators: [withKnobs]
};

const config = {
  position: {
    top: 200,
    left: 200
  },
  id: 1,
  title: "My Title",
  description: "My Description",
  children: [
    {
      id: 2,
      title: "My test",
      description: "My test",
      position: {
        top: 400,
        left: 20
      }
    },
    {
      id: 3,
      title: "My Title",
      description: "My Description",
      position: {
        top: 400,
        left: 380
      },
      children: [
        {
          id: 4,
          title: "My Title",
          description: "My Description",
          position: {
            top: 600,
            left: 380
          }
        }
      ]
    }
  ]
};

export const Default = () => {
  return (
    <div style={{ width: "100%", height: "800px" }}>
      <Flow config={config} />
    </div>
  );
};
