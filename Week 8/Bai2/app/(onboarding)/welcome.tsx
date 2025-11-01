import { setName } from "@/lib/storage";
import { router, type Href } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function Onboarding() {
  const [name, set] = useState("");

  const onGo = async () => {
    const n = name.trim();
    if (!n) return;
    await setName(n);
    router.replace("/(main)/home" as Href);
  };

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center" }}>
      <Image
        source={require("@/assets/images/note.png")}
        style={{ width: 260, height: 260, alignSelf: "center" }}
      />
      <Text
        style={{
          fontSize: 36,
          fontWeight: "800",
          textAlign: "center",
          color: "#6b4bf4",
          marginTop: 24,
        }}
      >
        MANAGE YOUR{"\n"}TASK
      </Text>
      <View style={{ marginTop: 24 }}>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={set}
          style={{ borderWidth: 1, borderRadius: 12, padding: 16 }}
        />
      </View>
      <Pressable
        onPress={onGo}
        style={{
          marginTop: 32,
          backgroundColor: "#09c",
          padding: 18,
          borderRadius: 16,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "700" }}>
          GET STARTED →
        </Text>
      </Pressable>
    </View>
  );
}
