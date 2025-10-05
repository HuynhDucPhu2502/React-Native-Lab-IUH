import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { StyleSheet, View } from "react-native";
import { Introduce } from "../components/introduce";

type ProfileScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  "Profile"
>;

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Introduce></Introduce>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
