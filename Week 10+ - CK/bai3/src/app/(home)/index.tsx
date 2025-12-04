import { View, Text, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { useFetch } from "@/core/useFetch";
import { Product } from "@/core/types";
import { useFocusEffect } from "expo-router";
import { ActivityIndicator } from "react-native-paper";
import ProductCard from "@/components/ProductCard";

const HomePage = () => {
  const [data, setData] = useState<Product[]>([]);

  const { isLoading, GET } = useFetch();

  const handleFetchData = async () => {
    GET<Product[]>("/products").then((res) => setData(res));
  };

  useFocusEffect(
    useCallback(() => {
      handleFetchData();
    }, [])
  );

  if (isLoading) {
    <View className="flex flex-1 justify-center items-center">
      <ActivityIndicator size={"large"} animating />
    </View>;
  }

  return (
    <View className="flex flex-1 px-4 py-2">
      <Text className="text-xl font-bold">Danh sách mặt hàng</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard data={item} />}
      />
    </View>
  );
};

export default HomePage;
