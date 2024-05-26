import { StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RobotoText(props) {
  const { size, weight, color, transform, ...other } = props;
  const [fontsLoaded, fontError] = useFonts({
    rb: require('../../assets/fonts/Roboto-Regular.ttf'),
    'rb-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
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
    fontFamily: weight === 'bold' ? 'rb-bold' : 'rb',
    color: color || 'black',
    textTransform: transform ? transform : '',
  };
  return (
    <Text style={style} onLayout={onLayoutRootView} {...other}>
      {props.children}
    </Text>
  );
}
