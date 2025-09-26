import type React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import type { Phone } from "../types/phone";
import { phoneData } from "../data/dummy-data";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Color } from "../types/color";
import { usePhoneColors } from "../hooks/usePhoneColors";

type Props = NativeStackScreenProps<RootStackParamList, "ProductDetail">;

const LOCAL_IMAGES = {
  black: require("../imgs/black.png"),
  blue: require("../imgs/blue.png"),
  red: require("../imgs/red.png"),
  white: require("../imgs/white.png"),
} as const;

function pickImageSource(c: Color | null) {
  if (!c) return LOCAL_IMAGES.blue;
  const key = (c.id || c.image || "")
    .toLowerCase()
    .replace(/\.(png|jpg|jpeg|webp)$/i, "");
  return (LOCAL_IMAGES as any)[key] ?? LOCAL_IMAGES.blue;
}

const ProductDetailScreen = ({ navigation, route }: Props) => {
  const phoneId = route.params?.phoneId;
  const selectedColorId = route.params?.selectedColorId;
  const product: Phone = phoneData;

  const { colors } = usePhoneColors();

  const [selectedColor, setSelectedColor] = useState<Color | null>(null);

  useEffect(() => {
    if (!colors.length) return;

    const c = selectedColorId
      ? colors.find((x) => x.id === selectedColorId) ?? colors[0]
      : colors[0];
    setSelectedColor(c);
  }, [colors, selectedColorId]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.productCard}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={pickImageSource(selectedColor)}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.productTitle}>{product.name}</Text>

        {/* Rating */}
        <View style={styles.ratingContainer}>
          <View style={styles.stars}>
            {Array.from({ length: product.rating }, (_, index) => (
              <Text key={index} style={styles.star}>
                ⭐
              </Text>
            ))}
          </View>
          <Text style={styles.reviewText}>({product.reviews})</Text>
        </View>

        {/* Price */}
        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>{product.price}</Text>
          <Text style={styles.originalPrice}>{product.originalPrice}</Text>
        </View>

        {/* Guarantee Text */}
        <Text style={styles.guaranteeText}>{product.discount}</Text>

        {/* Color Selection Button */}
        <TouchableOpacity
          style={[styles.colorButton, !selectedColor && { opacity: 0.5 }]}
          disabled={!selectedColor}
          onPress={() =>
            navigation.navigate("ColorSelection", {
              phoneId,
              currentColorId: selectedColor?.id,
            })
          }
        >
          <Text style={styles.colorButtonText}>4 MÀU CHỌN MÀU</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* Buy Button */}
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  productCard: { padding: 20 },
  imageContainer: { alignItems: "center", marginBottom: 20 },
  productImage: { width: 200, height: 200 },
  productTitle: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  stars: { flexDirection: "row" },
  star: { fontSize: 16, color: "gold" },
  reviewText: { marginLeft: 5, color: "gray" },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  currentPrice: { fontSize: 20, fontWeight: "bold", marginRight: 10 },
  originalPrice: {
    fontSize: 16,
    color: "gray",
    textDecorationLine: "line-through",
  },
  guaranteeText: { color: "red", marginBottom: 20 },
  colorButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  colorButtonText: { fontSize: 16 },
  arrow: { fontSize: 16 },
  buyButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buyButtonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default ProductDetailScreen;
