import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import CustomerCard from "./components/CustomerCard";
import { addReservation } from "./features/reservationsSlice";

function App() {
  const [inputValue, setInputValue] = useState("");
  const reservations = useSelector((state: RootState) => state.reservations);
  const customers = useSelector(
    (state: RootState) => state.customers.customers
  );
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleClick = (e: any) => {
    if (!inputValue) {
      return;
    }
    dispatch(addReservation(inputValue));
    setInputValue("");
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index: number) => (
                <ReservationCard key={index} name={name} index={index} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={inputValue} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => (
            <CustomerCard
              id={customer.id}
              name={customer.name}
              food={customer.food}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
