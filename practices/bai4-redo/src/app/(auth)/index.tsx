import { View, Text } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import { useRouter } from "expo-router";

const AuthPage = () => {
  const router = useRouter();

  return (
    <View className="flex flex-1 justify-center items-center">
      <View className="w-full px-4 gap-4">
        <TextInput value="Huỳnh Đức Phú" label={"Họ tên"} />
        <TextInput value="KTPM18" label={"Lớp"} />
        <TextInput value="69" label={"MSSV"} />
        <Button mode="contained" onPress={() => router.push("/(home)")}>
          Đăng nhập
        </Button>
      </View>
    </View>
  );
};

export default AuthPage;
