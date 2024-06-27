import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import RobotoText from '../RobotoText/RobotoText';
import TitleText from '../TitleText/TitleText';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCoffee } from '../../slices/basketSlice';

export default function ProductPage({ route, navigation }) {
  const [selectSize, setSelectSize] = useState(227);
  const [selectAmount, setSelectAmount] = useState(1);
  const dispatch = useDispatch();
  return (
    // Содержит графную информацию о выбранном кофе и контейнер с выбором размера и количества
    <ScrollView style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ padding: 26, paddingLeft: 32 }}
        >
          <Image source={require('../../assets/images/BackArrow.png')} />
        </TouchableOpacity>
        <View style={styles.mainInfoBox}>
          <View style={styles.mainInfo}>
            <View style={styles.info}>
              <View style={styles.category}>
                <RobotoText
                  size={10}
                  weight="bold"
                  color="#FFFFFF"
                  transform="uppercase"
                >
                  {route.params.item.category}
                </RobotoText>
              </View>
              <TitleText size={24} weight="bold" color="#fff">
                {route.params.item.name}
              </TitleText>
            </View>
            <View style={styles.priceBox}>
              <TitleText size={36} color="#DBAC2C" weight="bold" top={6}>
                {route.params.item.price}₽
              </TitleText>
            </View>
          </View>
          <View>
            <RobotoText
              size={16}
              color="#D7D5D5"
              marginTop={20}
              marginBottom={33}
            >
              {route.params.item.info}
            </RobotoText>
          </View>
          <View style={styles.cupOfCoffeeImg}>
            <Image source={require('../../assets/images/CupOfCoffee.png')} />
          </View>
        </View>
      </View>
      <View style={styles.sizingBox}>
        <RobotoText size={14} color="#8D8686">
          Выберите размер:
        </RobotoText>
        <View style={styles.sizing}>
          <Pressable
            style={selectSize === 114 ? styles.selectButton : styles.button}
            onPress={() => setSelectSize(114)}
          >
            <RobotoText
              size={14}
              color={selectSize === 114 ? '#8047F8' : '#574F4D'}
              weight={selectSize === 114 ? 'bold' : ''}
            >
              114 мл
            </RobotoText>
          </Pressable>
          <Pressable
            style={selectSize === 140 ? styles.selectButton : styles.button}
            onPress={() => setSelectSize(140)}
          >
            <RobotoText
              size={14}
              color={selectSize === 140 ? '#8047F8' : '#574F4D'}
              weight={selectSize === 140 ? 'bold' : ''}
            >
              140 мл
            </RobotoText>
          </Pressable>
          <Pressable
            style={selectSize === 227 ? styles.selectButton : styles.button}
            onPress={() => setSelectSize(227)}
          >
            <RobotoText
              size={14}
              color={selectSize === 227 ? '#8047F8' : '#574F4D'}
              weight={selectSize === 227 ? 'bold' : ''}
            >
              227 мл
            </RobotoText>
          </Pressable>
        </View>
        <View style={styles.amount}>
          <View style={styles.amountInterface}>
            <TouchableOpacity
              onPress={() => setSelectAmount((prev) => prev - 1)}
              disabled={selectAmount === 1 && true}
            >
              <Image source={require('../../assets/images/minus.png')} />
            </TouchableOpacity>
            <RobotoText size={16} color="#272221">
              {selectAmount}
            </RobotoText>
            <TouchableOpacity
              onPress={() => setSelectAmount((prev) => prev + 1)}
            >
              <Image source={require('../../assets/images/plus.png')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.add}
            onPress={() => {
              dispatch(
                addCoffee({
                  ...route.params.item,
                  amount: selectAmount,
                  size: selectSize,
                  totalValue: 250 * selectAmount,
                })
              );
              setSelectAmount(1);
              setSelectSize(227);
            }}
          >
            <RobotoText size={14} weight="bold" color="#FFFFFF">
              ДОБАВИТЬ
            </RobotoText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#272221',
    paddingTop: 44,
    flexDirection: 'column',
    minHeight: '100%',
  },

  mainInfoBox: {
    marginTop: 12,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 0,
  },
  mainInfo: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  category: {
    backgroundColor: '#403937',
    padding: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 100,
    textTransform: 'uppercase',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginRight: 'auto',
    marginBottom: 12,
  },
  cupOfCoffeeImg: {
    zIndex: 3,
    bottom: -62,
  },
  sizingBox: {
    flexGrow: 1,
    backgroundColor: '#FAFAFA',
    padding: 32,
    paddingTop: 42,
    paddingBottom: 100,
  },
  sizing: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#EDEDED',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  selectButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#8047F8',
    color: '#8047F8',
    paddingVertical: 14,
    paddingHorizontal: 29,
  },
  amount: {
    padding: 8,
    backgroundColor: '#EDEDED',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  amountInterface: {
    width: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  add: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 46,
    backgroundColor: '#4B2995',
    borderRadius: 6,
  },
});
