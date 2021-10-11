import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import ProductDisplay from '../components/productDisplay';

// Screen for displaying products for sale

export default function ProductListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {products.map(element => {
        return <ProductDisplay
          key={element.title}
          title={element.title}
          subtitle={element.subtitle}
          image={element.image}></ProductDisplay>
      })}
    </SafeAreaView>
  )
}

const products = [{
  title: 'Random product that I no longer need', subtitle: '$150', image: 'https://picsum.photos/400/400'
}, { title: 'Used red bike', subtitle: '$3000', image: 'https://picsum.photos/400/400' }]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#dbdbdb'
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 150
  },
  mainIcon: {
    width: 150,
    height: 150,
    padding: 60,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5
  },
  actionsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  }
});