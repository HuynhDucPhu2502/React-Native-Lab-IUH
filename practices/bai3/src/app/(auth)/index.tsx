import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { setName } from "@/core/store";

const AuthPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("Huỳnh Đức Phú");

  return (
    <View className="flex flex-1 justify-center items-center">
      <View className="w-full px-4 gap-4">
        <Text className="text-xl text-center font-bold">Shopping App</Text>
        <TextInput
          placeholder="Họ tên"
          value={username}
          onChangeText={setUsername}
        />
        <Button
          mode="contained"
          onPress={() => {
            dispatch(setName(username));
            router.push("/(home)");
          }}
        >
          Đăng nhập
        </Button>
      </View>
    </View>
  );
};

export default AuthPage;
