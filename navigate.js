import MainPage from './components/MainPage/MainPage';
import BasketPage from './components/BasketPage/BasketPage';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import WelcomePage from './components/WelcomePage/WelcomePage';
import { Ionicons } from '@expo/vector-icons';
import ProductPage from './components/ProductPage/ProductPage';
import { DeliveryPage } from './components/DeliveryPage/DeliveryPage';
import { WelcomePage } from './components/WelcomePage/WelcomePage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#d3d3d378',
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0,
        },
        tabBarActiveTintColor: '#8047F8',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={MainPage}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={BasketPage}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={ProductPage}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{ title: 'Главная', headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MyTabs}
          options={{ title: 'Main', headerShown: false }}
        />
        <Stack.Screen
          name="Delivery"
          component={DeliveryPage}
          options={{ title: 'Delivery', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
