import { Href, router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Switch, Text, View } from "react-native";

export default function Settings() {
  const [notif, setNotif] = useState(true);
  const [dark, setDark] = useState(false);

  const goOnboarding = () => {
    router.replace("/(onboarding)/index" as Href);
  };

  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 12,
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600" }}>Notifications</Text>
        <Switch value={notif} onValueChange={setNotif} />
      </View>

      <View
        style={{
          borderWidth: 1,
          borderRadius: 12,
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600" }}>Dark mode</Text>
        <Switch value={dark} onValueChange={setDark} />
      </View>

      <Pressable
        onPress={goOnboarding}
        style={{
          marginTop: 12,
          backgroundColor: "#ef4444",
          padding: 14,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "700" }}>
          ← Quay về Onboarding
        </Text>
      </Pressable>
    </View>
  );
}
