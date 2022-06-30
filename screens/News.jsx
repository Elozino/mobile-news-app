import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../api/context'

const News = () => {
  const { news: { articles } } = useContext(NewsContext)
  const [activeIndex, setActiveIndex] = useState()
  const screenHeight = Dimensions.get("window").height
  // console.log(articles);

  return (
    <View>
      <Text>News</Text>
      {/* {articles &&
        ""} */}
      {/* <Carousel
      layout={"stack"}
        ref={(c) => { this._carousel = c; }}
        data={articles.slice(0, 10)}
        sliderWidth={sliderWidth}
        sliderHeight= {300}
        itemWidth={itemWidth}
        itemHeight={screenHeight}
        vertical ={true}
        renderItem={this._renderItem}
        onSnapToItem={index => setActiveIndex(index) }
      /> */}
    </View>
  )
}

export default News

const styles = StyleSheet.create({})