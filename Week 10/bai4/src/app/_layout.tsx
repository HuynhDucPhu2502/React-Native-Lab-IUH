import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
import { Slot, Stack } from "expo-router";
import { Text } from "react-native";
import { SQLiteProvider } from "expo-sqlite";
import { initTable } from "@/db";

export default function Layout() {
  return (
    <SQLiteProvider databaseName="app101.db" onInit={(db) => initTable(db)}>
      <SafeAreaProvider>
        <SafeAreaView className="flex flex-1">
          <Text className="text-3xl font-bold text-center">Training Diary</Text>
          <Stack screenOptions={{ headerShown: false }}></Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </SQLiteProvider>
  );
}
