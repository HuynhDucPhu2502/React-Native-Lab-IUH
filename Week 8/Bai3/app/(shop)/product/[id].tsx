import { SHOES } from "@/lib/shoes";
import { router, useLocalSearchParams } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Detail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = SHOES.find((s) => String(s.id) === String(id));
  if (!item) return null;

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Image
        source={item.img}
        style={{
          width: "100%",
          height: 220,
          resizeMode: "contain",
          backgroundColor: "#f9dfe5",
          borderRadius: 8,
        }}
      />

      <View
        style={{
          backgroundColor: "#d9b3b6",
          padding: 12,
          borderRadius: 8,
          marginTop: 8,
        }}
      >
        <Text style={{ fontWeight: "800" }}>
          {item.name} - discount {item.discount}%
        </Text>
        {item.specs.map((s, i) => (
          <Text key={i} style={{ marginTop: 4, fontWeight: "700" }}>
            {s}
          </Text>
        ))}
        <Text style={{ marginTop: 8, textAlign: "right", fontWeight: "800" }}>
          {item.price}$
        </Text>
      </View>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/(shop)/purchase/[id]",
            params: { id: String(item.id) },
          })
        }
        style={{
          marginTop: 12,
          padding: 16,
          borderRadius: 12,
          backgroundColor: "#09c",
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "800" }}>
          Buy
        </Text>
      </Pressable>
    </ScrollView>
  );
}
