import Axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

Axios.get('http://localhost:3000/data')
  .then((res) => {
    localStorage.setItem('product', JSON.stringify(res.data));
  })
  .catch((error) => console.log(error));

let initialState = JSON.parse(localStorage.getItem('product'));

export const productSlice = createSlice({
  name: 'product',
  initialState: { ...initialState },
  reducer: {
    fetchData: (state, action) => {
      state = action.payload;
    },
  },
});

export const { fetchData } = productSlice.actions;

export default productSlice.reducer;
