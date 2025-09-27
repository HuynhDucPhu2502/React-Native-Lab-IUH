import React, { useMemo } from "react";
import { View, FlatList, Text } from "react-native";
import { useFav } from "../context/FavoritesContext";
import ProductItem from "../components/ProductItem";

import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomeTabParamList, RootStackParamList } from "../types/navigation";
import { PRODUCTS } from "../data/dummy-data";

// ✅ Gộp props của Tab + Stack
type Props = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, "Favorites">,
  NativeStackScreenProps<RootStackParamList>
>;

export default function FavoritesScreen({ navigation }: Props) {
  const { ids } = useFav();
  const data = useMemo(() => PRODUCTS.filter((p) => ids.includes(p.id)), [ids]);

  if (data.length === 0) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>No favorites yet. Tap the heart on Products.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(it) => it.id}
      contentContainerStyle={{ padding: 16 }}
      ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      renderItem={({ item }) => (
        <ProductItem
          item={item}
          onPress={() => navigation.navigate("ProductDetails", { id: item.id })}
        />
      )}
    />
  );
}
