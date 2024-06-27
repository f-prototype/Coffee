import { StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function TitleText(props) {
  const { size, weight, color, ...other } = props;
  const [fontsLoaded, fontError] = useFonts({
    ping: require('../../assets/fonts/PingLCG-Regular.ttf'),
    'ping-bold': require('../../assets/fonts/PingLCG-Bold.ttf'),
    'ping-black': require('../../assets/fonts/PingLCG-Black.ttf'),
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
    fontFamily:
      weight === 'bold'
        ? 'ping-bold'
        : weight === 'black'
        ? 'ping-black'
        : 'ping',
    color: color || 'black',
  };
  return (
    <Text style={{ ...style, ...other }} onLayout={onLayoutRootView} {...other}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({});
