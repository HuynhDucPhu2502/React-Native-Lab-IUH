import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackPamList } from "../App";
import { Bike } from "../types/Bike";

type Props = NativeStackScreenProps<RootStackPamList, "BikeDetails">;

const { width } = Dimensions.get("window");
const PINK = "#FCE7EA";
const PRIMARY = "#EE3F43";
const MUTED = "#6B6B6B";

const getBikeImage = (imgPath: string) => {
  const match = imgPath.match(/bike_(\d)\.png$/);
  const id = match ? Number(match[1]) : 1;
  switch (id) {
    case 1:
      return require("../assets/imgs/bike_1.png");
    case 2:
      return require("../assets/imgs/bike_2.png");
    case 3:
      return require("../assets/imgs/bike_3.png");
    case 4:
      return require("../assets/imgs/bike_4.png");
    case 5:
      return require("../assets/imgs/bike_5.png");
    case 6:
      return require("../assets/imgs/bike_6.png");
    default:
      return require("../assets/imgs/bike_1.png");
  }
};

const BikeDetailsScreen = ({ route }: Props) => {
  const bike: Bike = route.params.bike;
  const oldPrice = Math.round(bike.price * 1.2);
  const percent = Math.round((1 - bike.price / oldPrice) * 100);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      <View style={styles.hero}>
        <Image source={getBikeImage(bike.img)} style={styles.image} />
      </View>

      <Text style={styles.title}>{bike.title}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.badge}>
          {percent}% OFF | {bike.price}$
        </Text>
        <Text style={styles.oldPrice}>{oldPrice}$</Text>
      </View>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>
        {bike.description ||
          "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc."}
      </Text>

      <TouchableOpacity style={styles.cta} activeOpacity={0.9}>
        <Text style={styles.ctaText}>Add to card</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BikeDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 12 },
  hero: {
    height: width * 0.78,
    borderRadius: 16,
    backgroundColor: PINK,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  image: { width: "92%", height: "92%", resizeMode: "contain" },
  title: { fontSize: 28, fontWeight: "900", color: "#171717", marginBottom: 6 },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
  },
  badge: { fontWeight: "900", color: MUTED },
  oldPrice: {
    textDecorationLine: "line-through",
    color: MUTED,
    fontWeight: "700",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#1f2937",
    marginBottom: 6,
  },
  description: { color: "#3f3f46", lineHeight: 20, marginBottom: 18 },
  cta: {
    height: 56,
    borderRadius: 28,
    backgroundColor: PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  ctaText: { color: "#fff", fontSize: 18, fontWeight: "900" },
});
