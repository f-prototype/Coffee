import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import TitleText from '../TitleText/TitleText';
import RobotoText from '../RobotoText/RobotoText';
import TralleyListElem from '../TralleyListElem/TralleyListElem';

export default function BasketPage({ navigation }) {
  const selectedCoffee = useSelector((state) => state.counter.selectedCoffee);
  const totalPrice = useSelector((state) => state.counter.totalPrice);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrow}
        >
          <Image source={require('../../assets/images/ArrowBackGray.png')} />
        </TouchableOpacity>
        <TitleText color="#403937" size={16} weight="bold">
          Корзина
        </TitleText>
      </View>
      {selectedCoffee.map((elem, index) => {
        return <TralleyListElem elem={elem} code={index} />;
      })}
      <View style={styles.footer}>
        <View style={styles.total}>
          <RobotoText size={16} color="#403937">
            Всего
          </RobotoText>
          <TitleText size={20} color="#403937" weight="bold">
            {totalPrice}₽
          </TitleText>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Delivery')}
        >
          <RobotoText size={14} weight="bold" color="#FFFFFF">
            Подтвердить заказ
          </RobotoText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    paddingTop: 44,
  },
  text: {
    color: '#fff',
  },
  header: {
    position: 'relative',
    width: '100%',
    paddingVertical: 28,
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  arrow: {
    position: 'absolute',
    left: 35,
  },
  footer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 200,
    elevation: 16,
    marginTop: 'auto',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    paddingHorizontal: 32,
    paddingVertical: 28,
  },
  total: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#C47F17',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 89,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
