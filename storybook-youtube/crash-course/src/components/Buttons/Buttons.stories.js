import React from "react";
import Buttons from "./Buttons";

export default {
  title: "components/Buttons",
  component: Buttons,
  args: { name: "Button bitch" },
  decorators: [centered],
  argTypes: {
    clicked: { action: "clicked" },
  },
};

function centered(Story) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {Story()}
    </div>
  );
}

const Template = (args) => <Buttons {...args} />;

export const RedButton = Template.bind({});
export const Blue = Template.bind({});
Blue.args = { name: "iustin" };
export const green = Template.bind({});
// RedButton.args = {};
