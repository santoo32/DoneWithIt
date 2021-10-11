<script src="http://localhost:8097"></script>
import React from 'react';
import { Text } from 'react-native'
import { WelcomeScreen } from './app/screens/WelcomeScreen'
import { ViewImageScreen } from './app/screens/ViewImageScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListItem from './app/components/listItem';
import MessagesScreen from './app/screens/MessagesScreen';
import UserProfileScreen from './app/screens/UserProfileScreen';


export default function App() {
  //const { landscape } = useDeviceOrientation();
  return (
    <MessagesScreen></MessagesScreen>
  );
}