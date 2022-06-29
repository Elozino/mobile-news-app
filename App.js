import { StyleSheet, Text, View, StatusBar } from "react-native";
import ContextProvider from "./api/context";
import { InshortTab } from "./components";

function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282c35" }}>
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
