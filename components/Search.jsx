import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../api/context'
import Entypo from "react-native-vector-icons"
import SingleNews from "../components/SingleNews"

const Search = () => {
  const { news: { articles }, darkMode } = useContext(NewsContext)

  const [searchResults, setSearchResults] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [currentNews, setCurrentNews] = useState()

  const handleSearch = (text) => {
    if (!text) {
      setSearchResults([])
      return
    }
    setSearchResults(articles.filter(query => query.title.includes(text)))
  }

  const handleModal = (item) => {
    setModalVisible(true)
    setCurrentNews(item)
  }
  return (
    <View>
      <TextInput
        placeholder="Search news"
        placeholderTextColor={darkMode ? "#cecece" : "grey"}
        style={{ ...styles.inputField, backgroundColor: darkMode ? "black" : "lightgrey", color: "white" }}
        onChangeText={(text) => handleSearch(text)}
      />
      <View style={styles.searchResult}>
        {searchResults.slice(0, 10).map(item => (
          <TouchableOpacity
            key={item.title}
            activeOpacity={0.7}
            onPress={() => handleModal(item)}
          >
            <Text style={{
              ...styles.singleResult,
              backgroundColor: darkMode ? "black" : "#ffF",
              color: darkMode ? "#fff" : "#000"
            }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent="true"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}
          style={{
            position: "absolute",
            zIndex: 2,
            right: 0,
            margin: 20,
            marginTop: 60
          }}
        >
          <Entypo name="circle-with-cross" size={30} color="#fff" />
        </TouchableOpacity>
        <View
          style={{
            height: "100%",
            transform: [{ scaleY: -1 }]
          }}>
          <SingleNews item={currentNews} />
        </View>
      </Modal>
    </View >
  )
}

export default Search

const styles = StyleSheet.create({
  inputField: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 15,
  },
  searchResult: {
    position: "absolute",
    zIndex: 1,
    top: 50,
  },
  singleResult: {
    borderRadius: 10,
    padding: 10,
    margin: 0.5,
    shadowColor: "black",
    elevation: 5
  }
})