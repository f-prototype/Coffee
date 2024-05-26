import { createSlice, current } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
  totalPrice: 0,
  selectedCoffee: [],
};

const basketSlice = createSlice({
  name: 'counter',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    calculateCost: (state) => {
      state.totalPrice = state.selectedCoffee.reduce(
        (sum, current) => sum + current.price
      );
    },

    addCoffee: (state, action) => {
      if (state.selectedCoffee.length) {
        let index = state.selectedCoffee.findIndex(
          (elem) =>
            elem.size == action.payload.size && elem.name == action.payload.name
        );
        if (index > -1) {
          state.selectedCoffee[index].amount += action.payload.amount;
          state.selectedCoffee[index].totalValue += action.payload.totalValue;
        } else {
          state.selectedCoffee.push(action.payload);
        }
      } else {
        state.selectedCoffee.push(action.payload);
      }
      let total = 0;
      state.selectedCoffee.map((elem) => {
        total = total + elem.totalValue;
      });
      state.totalPrice = total;
    },
    deleteCoffee: (state, action) => {
      state.selectedCoffee = state.selectedCoffee.filter(
        (elem) =>
          elem.name !== action.payload && elem.size !== action.payload.size
      );
      let total = 0;
      state.selectedCoffee.map((elem) => {
        total = total + elem.totalValue;
      });
      state.totalPrice = total;
    },
    changeAmount: (state, action) => {
      const selectIndex = state.selectedCoffee.findIndex(
        (elem) =>
          elem.name === action.payload.name && elem.size === action.payload.size
      );
      if (action.payload.type === 'increment') {
        state.selectedCoffee[selectIndex].totalValue =
          1.92 * (state.selectedCoffee[selectIndex].amount + 1);
        state.selectedCoffee[selectIndex].amount =
          state.selectedCoffee[selectIndex].amount + 1;
      } else {
        state.selectedCoffee[selectIndex].totalValue =
          1.92 * (state.selectedCoffee[selectIndex].amount - 1);
        state.selectedCoffee[selectIndex].amount =
          state.selectedCoffee[selectIndex].amount - 1;
      }
      let total = 0;
      state.selectedCoffee.map((elem) => {
        total = total + elem.totalValue;
      });
      state.totalPrice = total;
    },
  },
});

export const { addCoffee, deleteCoffee, changeAmount } = basketSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default basketSlice.reducer;
