import { View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import { ActivityIndicator, Button, Card } from "react-native-paper";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { Product } from "@/core/types";
import { useFetch } from "@/core/useFetch";
import { addToCart, useAppDispatch } from "@/core/store";

const ProductDetailsPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const [data, setData] = useState<Product>({} as Product);
  const router = useRouter();

  const { isLoading, GET } = useFetch();

  useFocusEffect(
    useCallback(() => {
      GET<Product>(`/products/${id}`).then((res) => setData(res));
    }, [id])
  );

  if (isLoading || !data) {
    <View className="flex flex-1 justify-center items-center">
      <ActivityIndicator size={"large"} animating />
    </View>;
  }

  return (
    <View className="w-full px-4 my-4  justify-center items-center  flex flex-1 gap-4">
      <View className="w-full gap-4">
        <Text>Tên: {data.name}</Text>
        <Text>Thể loại: {data.category}</Text>
        <Text>Giá: {data.price}</Text>
        <Text>Thể loại: {data.description}</Text>
        <Button mode="contained" onPress={() => dispatch(addToCart(data))}>
          Thêm giỏ hàng
        </Button>
        <Button mode="outlined" onPress={() => router.push("/(home)")}>
          Quay lại
        </Button>
      </View>
    </View>
  );
};

export default ProductDetailsPage;
