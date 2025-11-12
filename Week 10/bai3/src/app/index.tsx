import { Link, useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function Page() {
  const router = useRouter();

  return (
    <View className="flex flex-1 justify-center items-center">
      <View className="w-full gap-4 px-4">
        <Text className="text-xl">Student Information</Text>
        <TextInput label={"Name"} value="Khánh Gia Wibu"></TextInput>
        <TextInput label={"ID"} value="6967420"></TextInput>
        <TextInput label={"Class"} value="KTPM18"></TextInput>
        <Button mode="contained" onPress={() => router.navigate("(tabs)/list")}>
          Qua trang quản lý
        </Button>
      </View>
    </View>
  );
}
