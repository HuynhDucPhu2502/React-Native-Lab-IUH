import React, { useMemo } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { useFav } from "../context/FavoritesContext";
import { PRODUCTS } from "../data/dummy-data";

type Props = NativeStackScreenProps<RootStackParamList, "ProductDetails">;

export default function ProductDetailsScreen({ route }: Props) {
  const { id } = route.params;
  const product = useMemo(() => PRODUCTS.find((p) => p.id === id), [id]);
  const { has, toggle } = useFav();

  if (!product) {
    Alert.alert("Not found", "Product not found");
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.cover} />
      <View style={styles.row}>
        <Text style={styles.name}>{product.name}</Text>
        <TouchableOpacity onPress={() => toggle(product.id)}>
          <Ionicons
            name={has(product.id) ? "heart" : "heart-outline"}
            size={26}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  cover: { width: "100%", height: 220, borderRadius: 16, marginBottom: 16 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: { fontSize: 22, fontWeight: "700" },
  price: { marginTop: 8, fontSize: 18, color: "#666" },
  desc: { marginTop: 12, lineHeight: 20 },
});
