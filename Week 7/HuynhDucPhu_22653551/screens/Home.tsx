import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackPamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackPamList, "Home">;

const { width } = Dimensions.get("window");
const CARD_W = width - 32;

const HomeScreen = ({ navigation }: Props) => {
  const handleGetStarted = () => {
    navigation.navigate("BikeList");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tagline}>
        A premium online store for{"\n"}sporter and their stylish choice
      </Text>

      <View style={styles.imageCard}>
        <Image
          source={require("../assets/imgs/bike_1.png")}
          style={styles.bike}
        />
      </View>

      <Text style={styles.title}>POWER BIKE{"\n"}SHOP</Text>

      <TouchableOpacity
        style={styles.cta}
        activeOpacity={0.9}
        onPress={handleGetStarted}
      >
        <Text style={styles.ctaText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 28,
    justifyContent: "space-between",
  },
  tagline: {
    textAlign: "center",
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "700",
    letterSpacing: 0.5,
    color: "#111",
    marginTop: 8,
  },
  imageCard: {
    width: CARD_W,
    height: CARD_W * 0.9,
    alignSelf: "center",
    backgroundColor: "#FCE7EA", // hồng nhạt
    borderRadius: 40,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  bike: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    textAlign: "center",
    fontSize: 36,
    lineHeight: 42,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#0D0D0D",
  },
  cta: {
    height: 72,
    borderRadius: 36,
    backgroundColor: "#EE3F43",
    alignItems: "center",
    justifyContent: "center",
    width: width - 32,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  ctaText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: 1,
  },
});
