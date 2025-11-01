import { getName } from "@/lib/storage";
import { useTasks } from "@/store/tasks";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";

export default function Home() {
  const { list, toggle } = useTasks();
  const [q, setQ] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    getName().then((n) => setName(n || ""));
  }, []);
  const data = list.filter((x) =>
    x.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "800" }}>Hi {name}</Text>
      <Text style={{ color: "#666", marginBottom: 12 }}>
        Have a great day ahead
      </Text>
      <TextInput
        placeholder="Search"
        value={q}
        onChangeText={setQ}
        style={{
          borderWidth: 1,
          borderRadius: 12,
          padding: 14,
          marginBottom: 16,
        }}
      />
      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/(main)/task/${item.id}`)}
            style={{
              padding: 18,
              borderRadius: 20,
              backgroundColor: "#e9ebee",
              marginBottom: 14,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Pressable onPress={() => toggle(item.id)}>
              <Text>{item.done ? "✅" : "⬜️"}</Text>
            </Pressable>
            <Text
              style={{
                flex: 1,
                marginLeft: 12,
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              {item.title}
            </Text>
            <Text>✏️</Text>
          </Pressable>
        )}
      />
      <Pressable
        onPress={() => router.push("/(main)/add")}
        style={{
          position: "absolute",
          bottom: 28,
          alignSelf: "center",
          backgroundColor: "#09c",
          width: 76,
          height: 76,
          borderRadius: 38,
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center", color: "#fff", fontSize: 32 }}>
          ＋
        </Text>
      </Pressable>
    </View>
  );
}
