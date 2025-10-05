import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export const Introduce = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin sinh viên</Text>
      <TextInput style={styles.inputContainer} value="Huỳnh Đức Phú" />
      <TextInput style={styles.inputContainer} value="DHKTPM18ATT" />
      <TextInput style={styles.inputContainer} value="22653551" />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },

  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 20,
  },

  inputContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
  },
});
