import { Image, StyleSheet, View } from 'react-native';
import RobotoText from '../RobotoText/RobotoText';
import TitleText from '../TitleText/TitleText';

export default function ListCoffeeElem({ item }) {
  return (
    <View style={styles.container}>
      <Image source={item.src} style={styles.Image} />
      <View style={styles.info}>
        <TitleText weight="bold" size={16} color="#403937" marginBottom={5}>
          {item.name}
        </TitleText>
        <RobotoText size={12} color="#8D8686">
          {item.info}
        </RobotoText>
        <TitleText size={20} weight="bold" color="#C47F17" marginTop={8}>
          {item.price}₽
        </TitleText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F2F2',
    marginTop: 32,
    borderWidth: 1,
    borderColor: '#EDEDED',
    borderRadius: 6,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 36,
    flexDirection: 'row',
    padding: 16,
    paddingLeft: 8,
  },
  text: {
    color: '#fff',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  Image: {
    width: 96,
    height: 96,
    top: -35,
  },
});
