import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, "Home">;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProps>();

  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate("Profile")}
        title="Xem hồ sơ"
      />
      <Button
        onPress={() => navigation.navigate("Todo")}
        title="Việc cần làm"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
  },
});

export default HomeScreen;
