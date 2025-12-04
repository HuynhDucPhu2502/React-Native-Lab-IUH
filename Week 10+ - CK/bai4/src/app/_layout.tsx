import "../global.css";
import { Slot } from "expo-router";

import { Text, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Image, Link } from "@/tw";
import { Provider } from "react-redux";
import { store } from "@/core/store";

export default function Layout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView className="flex flex-1 m">
          <Text className="text-xl font-bold text-center py-4">
            Training Diary
          </Text>
          <Slot />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
