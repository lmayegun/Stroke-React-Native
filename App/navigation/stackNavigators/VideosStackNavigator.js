import { createStackNavigator } from 'react-navigation-stack';
import VideoScreenTab from './tabs/VideoScreenTab';

const VideosStackNavigator = createStackNavigator(
  {
    Video: VideoScreenTab,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerShown: false
    }),
  }
);

export default VideosStackNavigator;
