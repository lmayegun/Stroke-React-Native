import { createStackNavigator } from 'react-navigation-stack';
import HomeScreenTab from './tabs/HomeScreenTab';

const HomeNavigation = createStackNavigator(
  {
    Home: HomeScreenTab,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerShown: false
    }),
  }
);

export default HomeNavigation;
