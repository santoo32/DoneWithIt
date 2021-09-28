import React from 'react';
import { WelcomeScreen } from './app/screens/WelcomeScreen'
import { ViewImageScreen } from './app/screens/ViewImageScreen'
import { ProductListScreen } from './app/screens/ProductListScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListItem from './app/components/listItem';


export default function App() {
  //const { landscape } = useDeviceOrientation();
  return (
    <ListingDetailsScreen></ListingDetailsScreen>
  );
}