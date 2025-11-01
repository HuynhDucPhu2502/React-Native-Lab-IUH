import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HomeScreen } from "./screens/HomeScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { WatchlistScreen } from "./screens/WatchlistScreen";
import { MovieFormScreen } from "./screens/MovieFromScreen";
import { Movie } from "./types/Movie";

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Watchlist: undefined;
  MovieForm: {
    onCreate?: (movie: Movie) => void;
    onUpdate?: (movie: Movie) => void;
    movie?: Movie;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Watchlist" component={WatchlistScreen} />
            <Stack.Screen name="MovieForm" component={MovieFormScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
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
