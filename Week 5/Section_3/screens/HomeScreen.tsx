import React, { useMemo } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const DUMMY_DATA = [
  { id: "1", title: "iPhone 15 Pro" },
  { id: "2", title: "MacBook Air M3" },
  { id: "3", title: "iPad Pro M4" },
  { id: "4", title: "AirPods Pro 2" },
  { id: "5", title: "Apple Watch Series 10" },
];

export default function HomeScreen() {
  const data = useMemo(() => DUMMY_DATA, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingVertical: 12 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 8 },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#f2f2f7",
  },
  itemText: { fontSize: 16, fontWeight: "500" },
});
