import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../api/context'
import Carousel from "react-native-snap-carousel"
import SingleNews from "../components/SingleNews"

const News = () => {
  const { news: { articles } } = useContext(NewsContext)
  const [activeIndex, setActiveIndex] = useState()
  const screenHeight = Dimensions.get("window").height
  // console.log(articles);

  return (
    <View style={styles.carousel}>
      {articles &&
        <Carousel
          layout={"stack"}
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={screenHeight}
          vertical={true}
          renderItem={({ item, index }) => (<SingleNews item={item} index={index} />)}
          onSnapToItem={index => setActiveIndex(index)}
        // sliderWidth={sliderWidth}
        // itemWidth={itemWidth}
        />
      }
    </View>
  )
}

export default News

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: "black",
    transform: [{ scaleY: -1 }]
  }
})