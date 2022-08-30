import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const Succes = () => <Button colorScheme="blue">Button</Button>;
export const Error = () => <Button colorScheme="red">Button</Button>;

export const SuccessArgs = Template.bind({});
SuccessArgs.args = {
  colorScheme: "green",
  children: "Success",
};

export const ErrorArgs = Template.bind({});
ErrorArgs.args = {
  colorScheme: "purple",
  children: "Error",
};
