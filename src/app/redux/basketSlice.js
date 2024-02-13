import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return (
    JSON.parse(localStorage.getItem("products")) || {
      allProduct: [],
      total: 0,
      price: 0,
      amount:0,
    }
  );
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToData: (state, { payload }) => {
      const item = state.allProduct.find((prod) => prod.id === payload.id);

      if (item) {
        item.amount += 1;
      } else {
        state.allProduct = [...state.allProduct, payload];
      }
      basketSlice.caseReducers.total(state);
    },
    deleteToData: (state, { payload }) => {
      state.allProduct = state.allProduct.filter((item)=>item.id !== payload)
      basketSlice.caseReducers.total(state)
    },
    increment: (state, { payload }) => {
      const item = state.allProduct.find((item)=>item.id === payload.id)
      item.amount += 1
    },
    decrement: (state, { payload }) => {
      const item = state.allProduct.find((item)=>item.id === payload.id)
      item.amount -= 1
    },
    total: (state) => {
      let allPrice = 0;
      let allTotal = 0;

      state.allProduct.forEach((item) => {
        allPrice += item.amount * item.price;
        allTotal += item.amount;
      });
      state.price = allPrice;
      state.total = allTotal;
      localStorage.setItem('products', JSON.stringify(state))
    },
  },
});

export const { addToData, deleteToData, removeToData, total, increment, decrement } =
  basketSlice.actions;
export default basketSlice.reducer;
