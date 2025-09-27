import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/img.png")} style={styles.avatar} />
      <Text style={styles.name}>Huỳnh Đức Phú</Text>
      <Text style={styles.caption}>TOP 1 IT 2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 12 },
  name: { fontSize: 20, fontWeight: "700" },
  caption: { marginTop: 4, color: "#666" },
});
