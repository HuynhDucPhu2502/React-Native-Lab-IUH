import { SHOES } from "@/lib/shoes";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function Purchase() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = useMemo(
    () => SHOES.find((s) => String(s.id) === String(id)),
    [id]
  );
  const [qty, setQty] = useState(1);
  if (!item) return null;

  const total = item.price * qty;

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Image
        source={item.img}
        style={{ width: "100%", height: 200, resizeMode: "contain" }}
      />
      <Text style={{ fontSize: 20, fontWeight: "800" }}>{item.name}</Text>
      <Text>Price: {item.price}$</Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginTop: 8,
        }}
      >
        <Pressable
          onPress={() => setQty((q) => Math.max(1, q - 1))}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 16,
            borderRadius: 8,
            backgroundColor: "#eee",
          }}
        >
          <Text>-</Text>
        </Pressable>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            width: 40,
            textAlign: "center",
          }}
        >
          {qty}
        </Text>
        <Pressable
          onPress={() => setQty((q) => q + 1)}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 16,
            borderRadius: 8,
            backgroundColor: "#eee",
          }}
        >
          <Text>+</Text>
        </Pressable>
      </View>

      <Text style={{ marginTop: 8, fontSize: 18, fontWeight: "800" }}>
        Total: {total}$
      </Text>

      <Pressable
        onPress={() => router.back()}
        style={{
          marginTop: "auto",
          padding: 16,
          borderRadius: 12,
          backgroundColor: "#09c",
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "800" }}>
          Pay now
        </Text>
      </Pressable>
    </View>
  );
}
