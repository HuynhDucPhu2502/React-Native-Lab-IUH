import { View, Text } from "react-native";
import React, { useState } from "react";
import { useFetch } from "@/core/useFetch";
import { Button, TextInput } from "react-native-paper";
import {
  CartSliceType,
  setAll,
  useAppDispatch,
  useAppSelector,
} from "@/core/store";

const SyncPage = () => {
  const [url, setUrl] = useState("");
  const { isLoading, GET, POST } = useFetch(url);

  const dispatch = useAppDispatch();
  const { items, name, total } = useAppSelector((state) => state.cart);

  const handlePost = async () => {
    await POST("", { items, name, total });
  };

  const handleGet = async () => {
    const data = await GET<CartSliceType>("");
    dispatch(setAll(data));
  };

  return (
    <View className="flex flex-1 justify-center items-center">
      <View className="w-full px-4 gap-4">
        <TextInput placeholder="Nhập URL" value={url} onChangeText={setUrl} />
        <Button mode="contained" disabled={isLoading} onPress={handlePost}>
          Đẩy thông tin
        </Button>
        <Button mode="contained-tonal" disabled={isLoading} onPress={handleGet}>
          Nhập thông tin
        </Button>
      </View>
    </View>
  );
};

export default SyncPage;
