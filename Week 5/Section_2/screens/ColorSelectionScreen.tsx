import type React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import type { Color } from "../types/color";
import { phoneData } from "../data/dummy-data";
import { RootStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { usePhoneColors } from "../hooks/usePhoneColors";

type Props = NativeStackScreenProps<RootStackParamList, "ColorSelection">;

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

const ColorSelectionScreen = ({ navigation, route }: Props) => {
  const phoneId = route.params?.phoneId;
  const currentColorId = route.params?.currentColorId;

  const { colors } = usePhoneColors();
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedColorId && colors.length) {
      setSelectedColorId(currentColorId ?? colors[0].id);
    }
  }, [colors, currentColorId, selectedColorId]);

  const selectedColorObj = colors.find((c) => c.id === selectedColorId) ?? null;

  const handleColorSelect = (colorId: string) => {
    setSelectedColorId(colorId);
  };

  const handleDone = () => {
    if (!selectedColorId) return;
    navigation.navigate("ProductDetail", { phoneId, selectedColorId });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image
          source={pickImageSource(selectedColorObj)}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      {/* Product Title */}
      <Text style={styles.productTitle}>{phoneData.name}</Text>

      {/* Color Selection Text */}
      <Text style={styles.selectionText}>Chọn một màu bên dưới:</Text>

      {/* Color Options */}
      <View style={styles.colorContainer}>
        {colors.map((colorOption: Color) => (
          <TouchableOpacity
            key={colorOption.id}
            style={[
              styles.colorOption,
              { backgroundColor: colorOption.color },
              selectedColorId === colorOption.id && styles.selectedColor,
            ]}
            onPress={() => handleColorSelect(colorOption.id)}
          />
        ))}
      </View>

      {/* Done Button */}
      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.doneButtonText}>XONG</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  imageContainer: { width: 200, height: 200, marginBottom: 20 },
  productImage: { width: "100%", height: "100%" },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  selectionText: { fontSize: 16, marginBottom: 10 },
  colorContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedColor: { borderColor: "black" },
  doneButton: { backgroundColor: "green", padding: 15, borderRadius: 10 },
  doneButtonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default ColorSelectionScreen;
