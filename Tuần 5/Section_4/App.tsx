import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import type { RootStackParamList, HomeTabParamList } from "./types/navigation";
import FavoritesScreen from "./screens/FavoritesScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import { FavoritesProvider } from "./context/FavoritesContext";
import ProductsScreen from "./screens/ProductsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<HomeTabParamList>();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        tabBarIcon: ({ focused, size, color }) => {
          const map: Record<keyof HomeTabParamList, [any, any]> = {
            Products: ["pricetags-outline", "pricetags"] as any,
            Favorites: ["heart-outline", "heart"] as any,
          };
          const [outline, solid] = map[route.name as keyof HomeTabParamList];
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
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={{ title: "Product Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
