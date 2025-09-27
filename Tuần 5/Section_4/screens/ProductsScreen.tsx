import React from "react";
import { View, FlatList } from "react-native";
import ProductItem from "../components/ProductItem";

import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomeTabParamList, RootStackParamList } from "../types/navigation";
import { PRODUCTS } from "../data/dummy-data";

type Props = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, "Products">,
  NativeStackScreenProps<RootStackParamList>
>;

export default function ProductsScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(it) => it.id}
        contentContainerStyle={{ padding: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <ProductItem
            item={item}
            onPress={() =>
              navigation.navigate("ProductDetails", { id: item.id })
            }
          />
        )}
      />
    </View>
  );
}
