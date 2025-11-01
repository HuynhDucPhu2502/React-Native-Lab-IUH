import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { RootTabParamList } from "./types/navigation";

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";

import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
          tabBarShowLabel: true,
          tabBarIcon: ({ focused, size }) => {
            let name: keyof typeof Ionicons.glyphMap = "home";
            if (route.name === "Home") name = focused ? "home" : "home-outline";
            if (route.name === "Search")
              name = focused ? "search" : "search-outline";
            if (route.name === "Profile")
              name = focused ? "person" : "person-outline";
            return <Ionicons name={name} size={size} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
