import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/Home";
import BikeListScreen from "./screens/BikeList";
import BikeDetailsScreen from "./screens/BikeDetails";
import { Bike } from "./types/Bike";

export type RootStackPamList = {
  Home: undefined;
  BikeList: undefined;
  BikeDetails: { bike: Bike };
};

const Stack = createNativeStackNavigator<RootStackPamList>();

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="BikeList" component={BikeListScreen} />
            <Stack.Screen name="BikeDetails" component={BikeDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
