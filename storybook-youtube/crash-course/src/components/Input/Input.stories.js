import React from "react";
import Input from "./Input";
import Center from "../Center/Center";

export default {
  title: "Form/Input",
  component: Input,
  decorators: [(story) => <Center>{story()}</Center>],
};

export const Small = () => (
  <Input type="number" placeholder="small" size="small" />
);
export const Medium = () => (
  <Input type="text" placeholder="medium" size="medium" />
);
export const Large = () => (
  <Input type="text" placeholder="large" size="large" />
);
