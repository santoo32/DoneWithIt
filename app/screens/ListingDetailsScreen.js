import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import AppText from '../components/appText';
import ListItem from '../components/listItem';

// Screen for rendering the details of a product

export default function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        source={{
          uri: 'https://picsum.photos/400/400'
        }}
        resizeMode="cover"
        style={styles.productImage} />
      <View style={{ padding: 15 }}>
        <AppText style={styles.title} text={'A very awesome product'}></AppText>
        <AppText style={styles.subtitle} text={'$100'}></AppText>
      </View>
      <View>
        <ListItem
          title="Santiago Roa"
          image={{ uri: 'https://picsum.photos/70/70' }}
          imageStyles={{ width: 70, height: 70 }}
          subtitle="5 listings"
          onPress={() => console.log("Press")} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  productImage: { height: 400 },
  title: { fontSize: 24, fontWeight: '500', marginBottom: 20 },
  subtitle: { color: "green", fontSize: 20, fontWeight: 'bold' }
});
