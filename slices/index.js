import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './basketSlice.js';

export default configureStore({
  reducer: {
    // Свойство counter будет внутри объекта общего состояния: state.counter
    counter: basketReducer,
  },
});
