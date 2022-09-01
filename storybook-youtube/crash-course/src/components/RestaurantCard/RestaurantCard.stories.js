import React from "react";

import RestaurantCard from "./RestaurandCard";

export default {
  title: "components/RestaurantCard",
  component: RestaurantCard,
};

export const Card = () => (
  <RestaurantCard name="gigi" description="meh" rating="4" />
);

const Template = (args) => <RestaurantCard {...args} />;

export const FirstCard = Template.bind({});

FirstCard.args = {
  a: "Mamamia",
  description: "very nice serving",
  rating: "5.2",
};
