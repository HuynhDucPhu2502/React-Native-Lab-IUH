import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../App";
import { StyleSheet, Text, View } from "react-native";
import { ProfileTabParamList } from "./ProfileScreen";
import { TextInput } from "react-native-paper";

type Props = BottomTabScreenProps<ProfileTabParamList, "ClassInfo">;

export const ClassInfoScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput label={"Lớp học"} value="KTPM18" />
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
