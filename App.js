import * as SplashScreen from 'expo-splash-screen';
import MainStack from './navigate';
import { Provider } from 'react-redux';
import store from './slices/index';

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}
