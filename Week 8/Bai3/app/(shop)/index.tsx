import { SHOES } from "@/lib/shoes";
import { router } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";

export default function List() {
  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <FlatList
        data={SHOES}
        keyExtractor={(i) => String(i.id)}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/(shop)/product/${item.id}`)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#e9dccb",
              padding: 12,
              borderRadius: 16,
              gap: 12,
            }}
          >
            <Image
              source={item.img}
              style={{ width: 72, height: 72, resizeMode: "contain" }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "800" }}>
                {item.name} - discount {item.discount}%
              </Text>
              <Text style={{ color: "#444", marginTop: 4 }}>
                Pls touch to see detail
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
