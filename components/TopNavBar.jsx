import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { fetchNews, NewsContext } from "../api/context"

const TopNavBar = ({ index, setIndex }) => {
  const { fetchNews, darkMode, setDarkMode } = useContext(NewsContext)
  return (
    <View style={{ ...styles.container, backgroundColor: darkMode ? "#282c35" : "#fff" }}>
      {index === 0 ?
        (<TouchableOpacity style={styles.left}
          onPress={() => setDarkMode(!darkMode)}
        >
          <MaterialCommunityIcons
            name="theme-light-dark"
            size={24}
            color="#007fcf"
          />
        </TouchableOpacity>) : (
          <TouchableOpacity style={styles.left}
            onPress={() => setIndex(index === 0 ? 1 : 0)}
          >
            <SimpleLineIcons
              name="arrow-left"
              size={15}
              color="#007fcf"
            />
            <Text style={{ ...styles.left, color: darkMode ? "lightgrey" : "black", marginLeft: 5 }}>
              Discover
            </Text>
          </TouchableOpacity>
        )}

      <Text style={{ ...styles.center, color: darkMode ? "white" : "#000" }}>
        {index ? "All News" : "Discover"}
      </Text>

      {index ? (
        <TouchableOpacity style={styles.right}
          onPress={() => fetchNews("general")}
        >
          <Text style={styles.text}>
            <AntDesign name="reload1" size={24} color="#007fcf" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.right}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <Text style={{ ...styles.text, color: darkMode ? "lightgrey" : "#000", marginRight: 5 }}>
            All news
          </Text>
          <SimpleLineIcons
            name="arrow-right"
            size={15}
            color="#007fcf"
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default TopNavBar

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: "#007fcf",
    borderBottomWidth: 2,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: "700",
  }
})