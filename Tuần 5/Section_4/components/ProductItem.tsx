import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFav } from "../context/FavoritesContext";
import { Product } from "../types/product";

type Props = {
  item: Product;
  onPress: () => void;
};

export default function ProductItem({ item, onPress }: Props) {
  const { has, toggle } = useFav();

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.thumb} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>

      <TouchableOpacity onPress={() => toggle(item.id)} style={styles.favBtn}>
        <Ionicons name={has(item.id) ? "heart" : "heart-outline"} size={22} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f7",
    borderRadius: 14,
    padding: 12,
    gap: 12,
  },
  thumb: { width: 64, height: 64, borderRadius: 12 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "600" },
  price: { marginTop: 4, color: "#666" },
  favBtn: { padding: 6 },
});
