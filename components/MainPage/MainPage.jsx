import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import RobotoText from '../RobotoText/RobotoText';
import TitleText from '../TitleText/TitleText';
import { coffeeMenu } from '../../assets/coffeBd/coffeBd';
import ListCoffeeElem from '../ListCoffeElem/ListCoffeeElem';
import { useCallback, useRef, useState } from 'react';

export default function MainPage({ navigation }) {
  const InputRef = useRef(null);
  const [findElem, setfindElem] = useState();
  const [InputText, setInputText] = useState('');

  // Функция отложенной записи в состояние(ОПТИМИЗАЦИЯ)
  const useDebounce = (callback, delay) => {
    const timer = useRef(null);

    const debounceCallback = useCallback(
      (...args) => {
        if (timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(() => callback(...args), delay);
      },
      [callback, delay]
    );

    return debounceCallback;
  };
  // Событие нажатия на иконку поиска
  const onHandlePress = () => {
    if (InputText) {
      for (let key in coffeeMenu) {
        const result = coffeeMenu[key].filter((elem) =>
          elem.name.startsWith(InputText)
        );
        if (result.length) {
          console.log(result);
          setfindElem(result);
        }
      }
    }
  };
  const searchCoffe = useDebounce(async (value) => {
    setInputText(value);
  }, 500);
  const ChangeHandler = useCallback(
    async (text) => {
      searchCoffe(text);
    },
    [searchCoffe]
  );
  // Еще не реализованный скролл по якорям
  const executeScroll = (ref) => {
    // В будущем добавлю скролл
  };

  return (
    // Содержит шапку экрана с поиском по названию кофе и основную часть с меню
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.locationBox}>
          <Image
            source={require('../../assets/images/location1.png')}
            style={styles.locationImg}
          />
          <RobotoText size={14} color="#FAFAFA">
            Moscow, Russia
          </RobotoText>
        </View>
        <View style={styles.InputBox}>
          <TitleText size={20} weight="bold" color="#fff" marginBottom={20}>
            Find the perfect coffee for any time of day
          </TitleText>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.searchIconContainer}
              onPress={onHandlePress}
            >
              <Image
                source={require('../../assets/images/Search.png')}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Search"
              placeholderTextColor="#8D8686"
              ref={InputRef}
              onChangeText={(text) => ChangeHandler(text)}
            ></TextInput>
          </View>
          <Pressable
            style={styles.searchContainer}
            hitSlop={100}
            onPress={() => setfindElem(null)}
          >
            {findElem &&
              findElem.map((elem) => {
                return (
                  <TouchableOpacity style={styles.searchElem}>
                    <Image source={elem.src} style={styles.searchElemImg} />
                    <View style={styles.searchElemInfo}>
                      <RobotoText size={16} color="#272221">
                        {elem.name}
                      </RobotoText>
                      <TitleText size={16} weight="bold" color="#272221">
                        {elem.price}$
                      </TitleText>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </Pressable>
          <Image
            source={require('../../assets/images/coffee.png')}
            style={styles.coffeeBean}
          />
        </View>
        <View style={styles.menu}>
          <TitleText size={16} weight="bold" color="#574F4D" marginBottom={12}>
            Our coffees
          </TitleText>
          <View style={styles.categories}>
            <TouchableOpacity style={styles.category} onPress={executeScroll()}>
              <RobotoText size={10} weight="bold" color="#4B2995">
                TRADITIONAL
              </RobotoText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category} onPress={executeScroll()}>
              <RobotoText size={10} weight="bold" color="#4B2995">
                SWEETS
              </RobotoText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category} onPress={executeScroll()}>
              <RobotoText size={10} weight="bold" color="#4B2995">
                CPECIAL
              </RobotoText>
            </TouchableOpacity>
          </View>
          <View style={styles.coffeeList}>
            <View>
              {Object.keys(coffeeMenu).map((item) => {
                return (
                  <View key={item}>
                    <RobotoText
                      weight="bold"
                      size={14}
                      color="#8D8686"
                      marginTop={item === 'Traditional' ? 16 : 48}
                    >
                      {item}
                    </RobotoText>
                    {coffeeMenu[item].map((item) => {
                      return (
                        <TouchableOpacity
                          key={item.name}
                          onPress={() =>
                            navigation.navigate('Product', { item })
                          }
                        >
                          <ListCoffeeElem item={item} />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272221',
    paddingTop: 44,
  },
  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 28,
  },
  locationImg: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  InputBox: {
    padding: 28,
    paddingTop: 0,
    marginTop: 20,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    width: '100%',
    height: 42,
    backgroundColor: '#403937',
    padding: 12,
    paddingLeft: 36,
    fontFamily: 'Roboto',
    color: '#fff',
    borderRadius: 4,
    zIndex: 3,
  },
  searchContainer: {
    width: '100%',
    top: -5,
    backgroundColor: '#FAFAFA',
    borderRadius: 5,
    zIndex: 0,
  },
  searchElem: {
    width: '100%',
    height: 60,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBlockColor: '#EDEDED',
    borderBottomWidth: 1,
  },
  searchElemInfo: {
    alignItems: 'flex-end',
  },
  searchElemImg: {
    width: 50,
    height: 50,
  },
  searchIconContainer: {
    width: 30,
    height: '100%',
    display: 'flex',
    zIndex: 23,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 14,
    height: 14,
    color: '#8D8686',
  },
  coffeeBean: {
    marginLeft: 'auto',
    right: -20,
    marginBottom: 54,
  },
  menu: {
    backgroundColor: '#FAFAFA',
    padding: 32,
    paddingTop: 16,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  category: {
    borderWidth: 1,
    borderColor: '#8047F8',
    padding: 12,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 100,
    alignSelf: 'center',
    marginRight: 8,
  },
  coffeeList: {
    paddingBottom: 80,
  },
});
