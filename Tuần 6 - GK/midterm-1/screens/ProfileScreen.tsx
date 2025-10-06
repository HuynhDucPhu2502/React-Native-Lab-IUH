import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput label={"Họ tên"} value="Gia Khánh" />
      <TextInput label={"MSSV"} value="WIBU" />
      <TextInput label={"Lớp học"} value="WIBU18A" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 20,
  },
});
