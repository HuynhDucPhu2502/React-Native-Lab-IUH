import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useSettings } from "../context/SettingsContext";

export default function SettingsScreen() {
  const { notifications, darkMode, toggleNotifications, toggleDarkMode } =
    useSettings();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Notifications</Text>
        <Switch value={notifications} onValueChange={toggleNotifications} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Dark mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 16 },
  row: {
    padding: 16,
    borderRadius: 14,
    backgroundColor: "#f2f2f7",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: { fontSize: 16, fontWeight: "600" },
});
