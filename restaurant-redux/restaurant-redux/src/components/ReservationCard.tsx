import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationsSlice";
import { addCustomer } from "../features/customersSlice";
import { v4 as uuidv4 } from "uuid";

interface ReservationCardTypes {
  name: string;
  index: number;
}
export default function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(removeReservation(index));
    dispatch(addCustomer({ id: uuidv4(), name, food: [] }));
  };
  return (
    <div onClick={handleCardClick} className="reservation-card-container">
      {name}
    </div>
  );
}
