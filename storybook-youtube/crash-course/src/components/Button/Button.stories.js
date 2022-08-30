import React from "react";
import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Button", // set args at component level
  },
  argTypes: { onClick: { action: "clicked" } },
  decorators: [
    (story) => (
      <div
        style={{
          display: "flex",
          border: "1px solid red",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "auto",
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Error = () => <Button variant="danger">Error</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});

PrimaryA.args = {
  variant: "success",
  //   children: "Pirmary",
  loading: true,
};

export const SuccessA = Template.bind({});

SuccessA.args = {
  variant: "success",
  children: "success button A",
};

export const PrimaryB = Template.bind({});
PrimaryB.args = {
  variant: "danger",
  children: "Secondary",
  loading: false,
};

export const AnotherButton = Template.bind({});
AnotherButton.args = {
  ...SuccessA.args,
  children: "AnotherButton",
};
