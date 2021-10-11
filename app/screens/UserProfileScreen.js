import React from 'react'
import ListItem from '../components/listItem'
import { SafeAreaView, View, SectionList, StyleSheet } from 'react-native'

export default function UserProfileScreen() {


  const sectionItems = [
    {
      data: [
        {
          image: { uri: "https://picsum.photos/70/70" },
          title: "Santiago Roa",
          subtitle: "santiagot.roa@gmail.com",
          onPress: () => console.log("Touched"),
          imageStyles: { width: 70, height: 70 }
        }
      ]
    },
    {
      data: [
        {
          image: require('../assets/lista.png'),
          title: "My Listings",
          containerStyle: { backgroundColor: 'blue' }
        },
        {
          image: require('../assets/user.png'),
          title: "My Account",
          containerStyle: { backgroundColor: 'green' },
          onPress: () => console.log("Touched")
        }
      ]
    },
    {
      data: [
        {
          title: "Log Out",
          image: require('../assets/logout.png'),
          containerStyle: { backgroundColor: 'tomato' }
        }
      ]
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <SectionList
          sections={sectionItems}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (<ListItem {...item} ></ListItem>)}
          SectionSeparatorComponent={({ trailingItem }) => trailingItem ? (
            <View
              style={styles.sectionSeparator}
          />) : null}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e8e8e8' },
  sectionSeparator: {
    height: 30,
    width: "100%",
    backgroundColor: "#e8e8e8",
  }
})

