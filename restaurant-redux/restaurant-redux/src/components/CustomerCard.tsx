import { useDispatch } from "react-redux";

import { useState } from "react";
import { addFood } from "../features/customersSlice";

interface CustomerCardTypes {
  id: string;
  name: string;
  food: string[];
}
export default function CustomerCard({ id, name, food }: CustomerCardTypes) {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    dispatch(addFood({ id, food: inputValue }));
  };

  return (
    <>
      <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
          <div className="customer-food">
            {food.map((foodItem: string) => (
              <p>{foodItem}</p>
            ))}
          </div>
          <div className="customer-food-input-container">
            <input value={inputValue} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
          </div>
        </div>
      </div>
    </>
  );
}
