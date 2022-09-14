import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CunstomerState {
  customers: Customer[];
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface AddFoodToCustomer {
  id: string;
  food: string;
}

const initialState: CunstomerState = {
  customers: [],
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.customers.push(action.payload);
    },
    addFood: (state, action: PayloadAction<AddFoodToCustomer>) => {
      state.customers.forEach((customer) =>
        customer.id === action.payload.id
          ? customer.food.push(action.payload.food)
          : null
      );
    },
  },
});

export const { addCustomer, addFood } = customersSlice.actions;
export default customersSlice.reducer;
