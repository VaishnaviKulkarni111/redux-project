import { createSlice } from "@reduxjs/toolkit";

const initialCTState = { counter: 0, showCounter: true };

const CounterSlice = createSlice({
  name: 'counter',
  initialState: initialCTState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});
CounterSlice.actions.toggleCounter();

export const counterActions = CounterSlice.actions;

export default CounterSlice;