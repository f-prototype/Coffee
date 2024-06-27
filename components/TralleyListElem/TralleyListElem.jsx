import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import RobotoText from '../RobotoText/RobotoText';
import TitleText from '../TitleText/TitleText';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCoffee, changeAmount } from '../../slices/basketSlice';

export default function TralleyListElem({ elem, code }) {
  const dispatch = useDispatch();
  return (
    <View key={code + elem.name} style={styles.listElem}>
      <Image source={elem.src} style={styles.listImage} />
      <View style={styles.infoBox}>
        <View style={styles.textBox}>
          <View>
            <RobotoText size={16} color="#272221">
              {elem.name}
            </RobotoText>
            <RobotoText size={14} color="#8D8686">
              {elem.size} мл
            </RobotoText>
          </View>
          <View style={styles.priceBox}>
            <TitleText size={16} weight="bold" color="#272221">
              {elem.totalValue}₽
            </TitleText>
          </View>
        </View>
        <View style={styles.buttonBox}>
          <View style={styles.amountInterface}>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  changeAmount({
                    name: elem.name,
                    size: elem.size,
                    type: 'decrement',
                  })
                )
              }
              disabled={elem.amount === 1 && true}
            >
              <Image source={require('../../assets/images/minus.png')} />
            </TouchableOpacity>
            <RobotoText size={16} color="#272221">
              {elem.amount}
            </RobotoText>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  changeAmount({
                    name: elem.name,
                    size: elem.size,
                    type: 'increment',
                  })
                )
              }
            >
              <Image source={require('../../assets/images/plus.png')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.delete}
            onPress={() =>
              dispatch(deleteCoffee({ name: elem.name, size: elem.size }))
            }
          >
            <Image source={require('../../assets/images/trash.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listElem: {
    width: '100%',
    paddingHorizontal: 32,
    paddingVertical: 16,
    flexDirection: 'row',
    borderBlockColor: '#EDEDED',
    borderBottomWidth: 1,
  },
  listImage: {
    marginRight: 20,
  },
  textBox: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceBox: {
    // justifyContent: 'flex-end',
    // marginLeft: 40,
  },
  buttonBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  amountInterface: {
    width: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#E6E5E5',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 6,
    marginTop: 8,
  },
  delete: {
    width: 37,
    height: 37,
    backgroundColor: '#EDEDED',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginLeft: 8,
  },
});
