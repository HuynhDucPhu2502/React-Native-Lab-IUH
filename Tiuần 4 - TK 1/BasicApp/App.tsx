import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bai1 from "./components/bai1";
import Bai2 from "./components/bai2";
import Bai3 from "./components/bai3";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Bai4 from "./components/bai4";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Bai4 />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
