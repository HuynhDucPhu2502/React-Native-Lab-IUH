import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import type { RootDrawerParamList } from "./types/navigation";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { SettingsProvider } from "./context/SettingsContext";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function App() {
  return (
    <SettingsProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={({ route }) => ({
            headerTitleAlign: "center",
            drawerActiveTintColor: "#5E5CE6",
            drawerIcon: ({ focused, size, color }) => {
              const iconMap: Record<keyof RootDrawerParamList, [any, any]> = {
                Home: ["home-outline", "home"] as any,
                Profile: ["person-outline", "person"] as any,
                Settings: ["settings-outline", "settings"] as any,
              };
              const [outline, solid] =
                iconMap[route.name as keyof RootDrawerParamList];
              return (
                <Ionicons
                  name={focused ? solid : outline}
                  size={size}
                  color={color}
                />
              );
            },
          })}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SettingsProvider>
  );
}
