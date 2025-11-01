import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/img.png")} style={styles.avatar} />
      <Text style={styles.name}>Huỳnh Đức Phú</Text>
      <Text style={styles.caption}>TOP IT 2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    alignItems: "center",
  },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 16 },
  name: { fontSize: 22, fontWeight: "700" },
  caption: { marginTop: 6, color: "#666" },
});
