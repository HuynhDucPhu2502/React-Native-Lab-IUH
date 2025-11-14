import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
import { Stack } from "expo-router";
import { Text } from "react-native";
import { SQLiteProvider } from "expo-sqlite";
import { initTable } from "@/db";

export default function Layout() {
  return (
    <SQLiteProvider databaseName="app.db" onInit={(db) => initTable(db)}>
      <SafeAreaProvider>
        <SafeAreaView className="flex flex-1">
          <Text className="text-3xl font-bold text-center">
            Todo Tracker App
          </Text>
          <Stack>
            <Stack.Screen name="home/index" options={{ headerTitle: "Home" }} />
            <Stack.Screen name="form/index" options={{ headerTitle: "Form" }} />
            <Stack.Screen
              name="trash/index"
              options={{ headerTitle: "Trash" }}
            />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </SQLiteProvider>
  );
}
