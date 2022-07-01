import { useContext } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import ContextProvider, { NewsContext } from "./api/context";
import InshortTab from "./components/InshortTab";

function App() {
  const { darkMode } = useContext(NewsContext);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkMode ? "#282c35" : "#fff",
      }}
    >
      <InshortTab />
    </View>
  );
}

export default () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff"
    marginTop: StatusBar.currentHeight,
  },
});
