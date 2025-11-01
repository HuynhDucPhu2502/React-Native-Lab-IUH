import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export const ProfileScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput label={"Họ tên"} value="Nguyễn Thanh Tú"></TextInput>
      <TextInput label={"MSSV"} value="WIBU-GAY"></TextInput>
      <TextInput label={"Lớp"} value="WIBU18A"></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 12,
  },
});
