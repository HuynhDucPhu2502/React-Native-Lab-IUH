import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { setName, useAppDispatch } from "@/core/store";
import { useRouter } from "expo-router";

const AuthPage = () => {
  const [username, setUsername] = useState("Huỳnh Đức  Phú");
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <View className="flex flex-1 justify-center items-center">
      <View className="w-full px-4 gap-2">
        <TextInput
          label={"Nhập họ tên"}
          value={username}
          onChangeText={(v) => setUsername(v)}
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
