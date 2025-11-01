import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function SearchScreen() {
  const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <TextInput
        placeholder="Type your keyword…"
        value={keyword}
        onChangeText={setKeyword}
        style={styles.input}
        autoCapitalize="none"
      />
      <Text style={styles.hint}>You are searching for: {keyword || "…"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#d1d1d6",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  hint: { marginTop: 12, color: "#555" },
});
