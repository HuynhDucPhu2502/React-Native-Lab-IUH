import { RootTabParamList } from "../App";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TodoList } from "../components/TodoList";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

type Props = BottomTabScreenProps<RootTabParamList, "Profile">;

export const ProfileScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput label={"Họ tên"} value="Huỳnh Đức Phú" />
      <TextInput label={"MSSV"} value="22653551" />
      <TextInput label={"Lớp"} value="DHKTPM18ATT" />
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
