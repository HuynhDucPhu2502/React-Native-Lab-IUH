import { useTasks } from "@/store/tasks";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function EditTask() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { list, rename } = useTasks();
  const t = useMemo(() => list.find((x) => x.id === id), [list, id]);
  const [title, setTitle] = useState(t?.title ?? "");
  if (!t) return null;
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, borderRadius: 12, padding: 16 }}
      />
      <Pressable
        onPress={() => {
          rename(t.id, title.trim() || t.title);
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
          SAVE
        </Text>
      </Pressable>
    </View>
  );
}
