import { Platform } from 'react-native';
import MainPageAndroid from '../MainPageAndroid/MainPageAndroid';
import MainPageIos from '../MainPageIos/MainPageIos';

const Component1 = Platform.select({
  android: () => <MainPageAndroid />,
  ios: () => <MainPageIos />,
  default: () => <MainPageIos />,
});
export default function MainPage() {
  return <Component1 />;
}
