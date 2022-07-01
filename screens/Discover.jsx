import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../api/context'
import { categories, sources } from '../api/api'
import Carousel from "react-native-snap-carousel"
import Search from '../components/Search'


const windowWidth = Dimensions.get("window").width
const SLIDE_WIDTH = Math.round(windowWidth / 3.5)
const Discover = () => {
  const { setCategory, setSource, darkMode } = useContext(NewsContext)
  return (
    <View style={styles.container}>
      {/* search */}
      <Search />
      {/* categories */}
      <Text style={{ ...styles.subtitle, color: darkMode ? "white" : "#000" }}>
        Categories
      </Text>
      <Carousel
        layout={"default"}
        data={categories}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{ ...styles.category }}
            onPress={() => setCategory(item.name)}
          >
            <Image
              source={{ uri: item.pic }}
              style={styles.image}
            />
            <Text style={{ ...styles.name, color: darkMode ? "white" : "#000" }}>{item.name}</Text>
          </TouchableOpacity>
        )}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
      {/* sources */}
      <Text style={{ ...styles.subtitle, color: darkMode ? "white" : "#000" }}>
        Sources
      </Text>
      <View style={styles.sources}>
        {sources.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.sourceContainer}
            onPress={() => {
              console.log("first")
              setSource(item.id)
            }}
          >
            <Image
              source={{ uri: item.pic }}
              style={styles.sourceImage}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Discover

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // alignItems: "center"
  },
  inputField: {
    // flex: 1,
    flexDirection: "row"
  },
  category: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 80,
    margin: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#007fcf",
    borderBottomWidth: 2,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "60%",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize"
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#cc333d"
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover"
  }
})