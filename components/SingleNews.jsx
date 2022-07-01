import { StyleSheet, Text, View, Dimensions, Linking, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../api/context'

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

const SingleNews = ({ item, index }) => {
  const { darkMode } = useContext(NewsContext)
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.urlToImage }}
        style={styles.image}
      />
      <View style={{ ...styles.description, backgroundColor: darkMode ? "#282c35" : "#fff" }}>
        <Text style={{ ...styles.title, color: darkMode ? "#fff" : "#000" }}>{item.title}</Text>
        <Text style={{ ...styles.content, color: darkMode ? "#fff" : "#000" }}>{item.description}</Text>
        <Text style={{ color: darkMode ? "#cecece" : "#000", marginTop: 5 }}>
          Short by {item.author ?? "unknown"}
        </Text>
        <ImageBackground
          source={{ uri: item.urlToImage }}
          blurRadius={60}
          style={styles.footer}
        >
          <TouchableOpacity
            onPress={() => Linking.openURL(item.url)}
          >
            <Text style={{ fontSize: 15, color: "white" }}>
              {item?.content?.slice(0, 45)}...
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Read More
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View >
  )
}

export default SingleNews

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    // backgroundColor: "red", 
    transform: [{ scaleY: -1 }],
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10
  },
  description: {
    flex: 1,
    padding: 10
  },
  image: {
    resizeMode: "cover",
    height: "45%",
    width: windowWidth,
  },
  content: {
    fontSize: 14,
    paddingBottom: 10
  },
  footer: {
    height: 80,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  }
})