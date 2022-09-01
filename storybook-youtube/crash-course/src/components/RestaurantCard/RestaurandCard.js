import React from "react";
export default function RestaurantCard({ description, rating }) {
  return (
    <div style={{ border: "1px solid red" }}>
      <p>{description}</p>
      <p>{rating}</p>
    </div>
  );
}
