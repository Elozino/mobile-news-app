import React, { useContext } from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NewsContext } from '../api/context';
import { Discover, News } from '../screens';
import TopNavBar from './TopNavBar';

const renderScene = SceneMap({
  first: Discover,
  second: News,
});

const InshortTab = () => {
  const layout = useWindowDimensions();
  const { index, setIndex } = useContext(NewsContext)

  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavBar index={index} setIndex={setIndex} />}
    />
  )
}

export default InshortTab

const styles = StyleSheet.create({})