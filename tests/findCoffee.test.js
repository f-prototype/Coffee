import { findCoffee } from '../components/MainPageIos/MainPageIos';

test('Поиск кофе', () => {
  expect(findCoffee('Cuban')).toStrictEqual([
    {
      name: 'Cuban',
      info: 'Iced espresso drink with rum, cream and mint',
      price: '1,98',
      src: require('../assets/images/coffees/Cuban.png'),
      category: 'Specials',
    },
  ]);
});
