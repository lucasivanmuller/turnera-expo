import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, FlatList, Image } from "react-native"
import { LogBox } from "react-native"
import main_logo from "./assets/logo.png"
import TablaPacientes from "./components/DataTable.js"
import { Provider as PaperProvider, DarkTheme } from "react-native-paper"

// Ignore all log notifications:
// LogBox.ignoreAllLogs();

const App = () => {
  return (
    <PaperProvider theme={DarkTheme}>
      <View>
        <TablaPacientes />
      </View>
    </PaperProvider>
  )
}

export default App
