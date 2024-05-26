import { StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function TitleText(props) {
  const { size, weight, color, ...other } = props;
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

  const style = {
    fontSize: size || 15,
    fontFamily: weight === 'bold' ? 'bl2-bold' : 'bl2',
    color: color || 'black',
  };
  return (
    <Text style={style} onLayout={onLayoutRootView} {...other}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({});
