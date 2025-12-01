import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  CartSliceType,
  setAll,
  useAppDispatch,
  useAppSelector,
} from "@/core/store";
import { Button, TextInput } from "react-native-paper";
import { useFetch } from "@/core/useFetch";

const SyncPage = () => {
  const [urlPost, setUrlPost] = useState("");
  const [urlGet, setUrlGet] = useState("");

  const dispatch = useAppDispatch();
  const { items, name, total } = useAppSelector((state) => state.cart);

  const { isLoading: isLoadingPost, POST } = useFetch(urlPost);
  const { isLoading: isLoadingGet, GET } = useFetch(urlGet);

  const handlePost = () => {
    POST("", { items, name, total });
  };

  const handleGet = () => {
    GET<CartSliceType>("").then((res) => dispatch(setAll(res)));
  };

  return (
    <View className="flex flex-1 justify-center items-center gap-12">
      <View className="w-full px-4 gap-4">
        <TextInput
          placeholder="Nhập URL để gửi thông tin"
          value={urlPost}
          onChangeText={(v) => setUrlPost(v)}
        ></TextInput>
        <Button mode="contained" onPress={handlePost} disabled={isLoadingPost}>
          Gửi thông tin
        </Button>
      </View>

      <View className="w-full px-4 gap-4">
        <TextInput
          placeholder="Nhập URL để lấy thông tin"
          value={urlGet}
          onChangeText={(v) => setUrlGet(v)}
          disabled={isLoadingGet}
        ></TextInput>
        <Button mode="contained" onPress={handleGet}>
          Nhận thông tin
        </Button>
      </View>
    </View>
  );
};

export default SyncPage;
