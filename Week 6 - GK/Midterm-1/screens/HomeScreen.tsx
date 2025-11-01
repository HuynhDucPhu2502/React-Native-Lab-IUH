import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { Button } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={() => navigation.navigate("Profile")}>
        Profile Screen
      </Button>
      <Button onPress={() => navigation.navigate("Todo")} mode="contained">
        Todo Screen
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
  },
});
