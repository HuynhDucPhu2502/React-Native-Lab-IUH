import React from "react";

import { StyleSheet, TextInput, View } from "react-native";

const StudentInfo = () => {
  return (
    <View>
      <TextInput
        style={styles.inputContainer}
        placeholder="Họ tên"
        value="Huỳnh Đức Phú"
      ></TextInput>
      <TextInput
        style={styles.inputContainer}
        placeholder="Mã số sinh viên"
        value="22653551"
      ></TextInput>
      <TextInput
        style={styles.inputContainer}
        placeholder="Lớp"
        value="DHKTPM18ATT"
      ></TextInput>
    </View>
  );
};

export default StudentInfo;

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    marginHorizontal: "auto",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginVertical: 10,
  },
});
