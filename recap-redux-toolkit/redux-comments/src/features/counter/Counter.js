import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  selectCounter,
  incrementByTwo,
  incrementAsync,
} from "./counterSlice";

const Counter = () => {
  const [inputValue, setValue] = React.useState(0);
  const count = useSelector(selectCounter);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <button onClick={() => dispatch(reset())}>Reset</button>

        <button onClick={() => dispatch(incrementByAmount(Number(inputValue)))}>
          Increment By Amount
        </button>
        <button onClick={() => dispatch(incrementByTwo())}>
          Increment By 2
        </button>
        <button onClick={() => dispatch(incrementAsync(Number(inputValue)))}>
          Increment Async
        </button>
        <input value={inputValue} onChange={handleChange}></input>
      </div>
    </section>
  );
};

export default Counter;
