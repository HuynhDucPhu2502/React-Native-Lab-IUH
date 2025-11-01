import { getName } from "@/lib/storage";
import { useTasks } from "@/store/tasks";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Add() {
  const add = useTasks((s) => s.add);
  const [t, setT] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    getName().then((n) => setName(n || ""));
  }, []);
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "800" }}>Hi {name}</Text>
      <Text style={{ color: "#666", marginBottom: 20 }}>
        Have a great day ahead
      </Text>

      <Text style={{ fontSize: 34, fontWeight: "800", marginVertical: 14 }}>
        ADD YOUR JOB
      </Text>
      <TextInput
        placeholder="input your job"
        value={t}
        onChangeText={setT}
        style={{ borderWidth: 1, borderRadius: 12, padding: 16 }}
      />
      <Pressable
        onPress={() => {
          if (!t.trim()) return;
          add(t.trim());
          router.back();
        }}
        style={{
          marginTop: 24,
          backgroundColor: "#09c",
          padding: 18,
          borderRadius: 16,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "700" }}>
          FINISH →
        </Text>
      </Pressable>
    </View>
  );
}
