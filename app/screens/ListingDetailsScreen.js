import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import AppText from '../components/appText';
import ListItem from '../components/listItem';

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
        <AppText style={styles.title} text={'asdasdasd'}></AppText>
        <AppText style={styles.subtitle} text={'$100'}></AppText>
        <ListItem image='https://picsum.photos/400/400' title="Santiago Roa" subtitle="5 listings" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  productImage: { width: '100%', height: 400 },
  title: { fontSize: 24, fontWeight: '500', marginBottom: 20 },
  subtitle: { color: "green", fontSize: 20, fontWeight: 'bold' }
});
