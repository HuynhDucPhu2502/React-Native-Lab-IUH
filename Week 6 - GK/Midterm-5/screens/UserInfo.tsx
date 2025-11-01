import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../App";
import { StyleSheet, Text, View } from "react-native";
import { ProfileTabParamList } from "./ProfileScreen";
import { TextInput } from "react-native-paper";

type Props = BottomTabScreenProps<ProfileTabParamList, "UserInfo">;

export const UserInfoScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput label={"Họ tên"} value="Huỳnh Đức Phú" />
      <TextInput label={"Mã số sinh viên"} value="22653551" />
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
