import {
  addCoffee,
  deleteCoffee,
  calculateCost,
  changeAmount,
} from './basketSlice';
import store from './index';

const initialValue = {
  name: 'Iced Espresso',
  info: 'Drink made with espresso coffee and ice cubes',
  price: '1,98',
  src: 5,
  category: 'Traditional',
  amount: 2,
  size: 227,
  totalValue: 3.84,
};

test('Add to Trolley', () => {
  let state = store.getState().counter;
  store.dispatch(addCoffee(initialValue));
  state = store.getState().counter;
  expect(state.totalPrice).toBe(3.84);
  expect(state.selectedCoffee[0].name).toBe('Iced Espresso');
});

test('Remove from Trolley', () => {
  store.dispatch(deleteCoffee({ name: 'Iced Espresso', size: 227 }));
  state = store.getState().counter;
  expect(state).toEqual({ totalPrice: 0, selectedCoffee: [] });
});

test('Calculate cost', () => {
  store.dispatch(addCoffee(initialValue));
  store.dispatch(calculateCost());
  state = store.getState().counter;
  expect(state.totalPrice).toBe(3.84);
});

test('Change Amount', () => {
  store.dispatch(
    changeAmount({ type: 'increment', name: 'Iced Espresso', size: 227 })
  );
  state = store.getState().counter;
  expect(state.selectedCoffee[0].amount).toBe(3);
  expect(state.totalPrice).toBe(5.76);
  store.dispatch(
    changeAmount({ type: 'decrement', name: 'Iced Espresso', size: 227 })
  );
  state = store.getState().counter;
  expect(state.selectedCoffee[0].amount).toBe(2);
});
