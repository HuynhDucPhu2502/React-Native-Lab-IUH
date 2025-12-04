import { View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useFetch } from "@/core/useFetch";
import { Product } from "@/core/types";
import { ActivityIndicator, Button } from "react-native-paper";
import { addToCart, useAppDispatch } from "@/core/store";

const ProductDetailsPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [data, setData] = useState<Product>(null);

  const { isLoading, GET } = useFetch();
  const router = useRouter();
  const dispatch = useAppDispatch();

  useFocusEffect(
    useCallback(() => {
      if (id) {
        GET<Product>(`/products/${id}`).then(setData);
      }
    }, [id])
  );

  if (isLoading || !data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <ActivityIndicator size={"large"} animating color="purple" />
      </View>
    );
  }

  return (
    <View className="flex flex-1 px-4 py-2 justify-center items-center">
      <View className="w-full px-4 gap-4">
        <Text className="text-center  font-bold text-xl">{data.name}</Text>
        <Text>Thể loại: {data.category}</Text>
        <Text>Giá: {data.price}</Text>
        <Text>Mô tả: {data.description}</Text>
        <Button mode="contained" onPress={() => dispatch(addToCart(data))}>
          Thêm vào giỏ hàng
        </Button>
        <Button mode="contained-tonal" onPress={() => router.push("/(home)")}>
          Quay về
        </Button>
      </View>
    </View>
  );
};

export default ProductDetailsPage;
