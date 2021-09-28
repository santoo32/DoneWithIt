import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import AppText from '../components/appText'
import ListItem from '../components/listItem'
import Constants from 'expo-constants'

export default function MessagesScreen() {

  const messages = [
    { id: 1, title: 'John Doe', message: 'Is it still available?', image: 'https://picsum.photos/70/70' },
    { id: 2, title: 'Sam Smith', message: 'Whats your best price?', image: 'https://picsum.photos/70/70' },
    { id: 3, title: 'Carl Charles', message: 'Perfect!', image: 'https://picsum.photos/70/70' }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <AppText text="Messages" style={styles.title}></AppText>
      </View>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => <ListItem
          image={item.image}
          title={item.title}
          subtitle={item.message}
          onPress={() => console.log("handled message press")}>
        </ListItem>}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator}></View>}>
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    marginLeft: 10
  },
  titleContainer: {
    alignItems: 'center'
  },
  title: {
    fontSize: 30
  },
  itemSeparator: { width: '95%', height: 1, backgroundColor: '#dbdbdb' }
})
