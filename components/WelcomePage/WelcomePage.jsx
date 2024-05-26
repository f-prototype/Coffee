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

SplashScreen.preventAutoHideAsync();

export default function WelcomePage({ navigation }) {
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
      <Image source={require('../../assets/images/Logo.png')} />
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('Main')}
      >
        <TitleText size={20} weight={'bold'} color="#fff">
          Get started
        </TitleText>
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
    backgroundColor: '#272221',
    padding: 15,
    width: 200,
    borderRadius: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
