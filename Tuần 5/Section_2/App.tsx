import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ColorSelectionScreen from "./screens/ColorSelectionScreen";
import { RootStackParamList } from "./types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductDetail">
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ title: "Chi tiết sản phẩm" }}
        />
        <Stack.Screen
          name="ColorSelection"
          component={ColorSelectionScreen}
          options={{ title: "Chọn màu" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
