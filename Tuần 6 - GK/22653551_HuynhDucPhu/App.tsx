import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TodoList } from "./components/TodoList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TodoListScreen } from "./screens/TodoListScreen";
import { ProfileScreen } from "./screens/ProfileScreen";

export type RootTabParamList = {
  TodoList: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              options={{ headerShown: false }}
              name="TodoList"
              component={TodoListScreen}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name="Profile"
              component={ProfileScreen}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
