import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const [inputValue, setValue] = React.useState();
  const count = useSelector((state) => state.counter.count);

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
          Increment By 2
        </button>
        <input value={inputValue} onChange={handleChange}></input>
      </div>
    </section>
  );
};

export default Counter;
