import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import TitleText from '../TitleText/TitleText';
import RobotoText from '../RobotoText/RobotoText';

export const DeliveryPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Delivery.png')} />
      <TitleText size={24} weight="bold" color="#C47F17">
        Uhu! Order confirmed
      </TitleText>
      <RobotoText size={14} color="#403937">
        Now all you have to do is wait for the coffee to arrive!
      </RobotoText>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Feed')}
      >
        <RobotoText size={14} weight="bold" color="#FFFFFF">
          GO HOME
        </RobotoText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#4B2995',
    paddingVertical: 12,
    paddingHorizontal: 69,
    borderRadius: 6,
    marginTop: 64,
  },
});
