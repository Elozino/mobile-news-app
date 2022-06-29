import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../api/context'

const News = () => {
  const { news, status } = useContext(NewsContext)

  // console.log({ news, status });

  return (
    <View>
      <Text>News</Text>
    </View>
  )
}

export default News

const styles = StyleSheet.create({})