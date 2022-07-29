import { createStore } from 'redux';
import Axios from 'axios';

const reducer = (state = { product: {} }, action) => {
  if (action.type === 'fetchData') {
    Axios.get('https://my-stackline-api.herokuapp.com/data')
      .then((res) => {
        localStorage.setItem('product', JSON.stringify(res.data));
      })
      .catch((error) => console.log(error));
    return {
      product: JSON.parse(localStorage.getItem('product')),
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
