import { createSlice } from "@reduxjs/toolkit";

const initialState={
  amount: 0,
  price:0,
}


export const basketSlice = createSlice({
  name:'basket',
  initialState,
  reducers:{
    addItem:(state, { payload })=>{},
    removeItem:(state, { payload })=>{},
    deleteItem:(state, { payload })=>{},
  }
})
export const {addItem, removeItem, deleteItem } = basketSlice.actions
export default basketSlice.reducer