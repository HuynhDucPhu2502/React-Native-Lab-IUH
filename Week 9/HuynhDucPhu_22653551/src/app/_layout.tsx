import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
import { Slot, Stack } from "expo-router";
import { StatusBar, Text } from "react-native";
import { SQLiteProvider } from "expo-sqlite";
import { migrateDbIfNeeded } from "@/db/db";

export default function Layout() {
  return (
    <SQLiteProvider databaseName="app3.db" onInit={migrateDbIfNeeded}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <SafeAreaView className="flex-1">
          <Text className="font-bold text-2xl text-center">
            EXPENSE TRACKER
          </Text>
          <Stack
            screenOptions={{
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
            <Stack.Screen
              name="form/index"
              options={{ headerTitle: "Form Page" }}
            />
            <Stack.Screen
              name="trash/index"
              options={{ headerTitle: "Trash Page" }}
            />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </SQLiteProvider>
  );
}
