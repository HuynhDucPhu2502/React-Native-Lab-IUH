import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ProductListScreen } from "./screens/ProductListScreen";
import { ProductDetailsScreen } from "./screens/ProductDetailsScreen";
import { Product } from "./types/Product";

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetails: {
    data: Product;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen
            options={{ headerShown: false }}
            name="ProductList"
            component={ProductListScreen}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
