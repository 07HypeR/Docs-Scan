import { WebView } from "react-native-webview";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: "https://docu-capture-pro.lovable.app" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
