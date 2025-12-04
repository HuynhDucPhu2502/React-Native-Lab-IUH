import { View, Text, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { useAppSelector } from "@/core/store";
import { Product } from "@/core/types";
import { useFetch } from "@/core/useFetch";
import { ActivityIndicator } from "react-native-paper";
import { useFocusEffect } from "expo-router";
import ProductCard from "@/components/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { isLoading, GET } = useFetch();

  const handleFetch = () => {
    GET<Product[]>("/products").then(setProducts);
  };

  useFocusEffect(
    useCallback(() => {
      handleFetch();
    }, [])
  );

  if (isLoading) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <ActivityIndicator size={"large"} animating color="purple" />
      </View>
    );
  }

  return (
    <View className="flex flex-1 px-4 py-2">
      <Text className="text-lg font-bold">Danh sách mặt hàng</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard data={item} />}
      />
    </View>
  );
};

export default HomePage;
