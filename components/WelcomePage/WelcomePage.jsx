import { StatusBar } from 'expo-status-bar';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import TitleText from '../TitleText/TitleText';
import RobotoText from '../RobotoText/RobotoText';

SplashScreen.preventAutoHideAsync();

export function WelcomePage({ navigation }) {
  // Загрузка шрифтов
  const [fontsLoaded, fontError] = useFonts({
    bl2: require('../../assets/fonts/Baloo2.ttf'),
    'bl2-bold': require('../../assets/fonts/Baloo2-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    // Экран приветсвия содержит лого и кпопку перенаправляюую на главный экран
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Image source={require('../../assets/images/lastV.png')} />
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('Main')}
      >
        <RobotoText size={14} weight={'bold'} color="#fff">
          НАЧАТЬ
        </RobotoText>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8047F8',
  },
  logo: {
    width: 200,
    height: 150,
    color: '#fff',
  },
  link: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#403937',
    padding: 15,
    width: 154,
    borderRadius: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
