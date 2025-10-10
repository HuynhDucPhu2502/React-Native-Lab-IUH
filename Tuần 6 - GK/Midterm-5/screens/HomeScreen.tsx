import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={() => navigation.navigate("Profile")}>
        Home Screen
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("StudentsList")}
      >
        StudentsList Screen
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 12,
    gap: 12,
  },
});
