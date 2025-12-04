import { View, Text, FlatList } from "react-native";
import React from "react";
import { useAppSelector } from "@/core/store";
import CartCard from "@/components/CartCard";

const CartPage = () => {
  const { items, name, total } = useAppSelector((state) => state.cart);

  return (
    <View className="flex flex-1 px-4 py-4">
      <Text className="text-lg">
        Xin chào {name}, giỏ hàng bạn có trị giá {total}
      </Text>
      <Text className="font-bold text-xl">Giỏ hàng</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.product.id}
        renderItem={({ item }) => (
          <CartCard data={item.product} quantity={item.quantity} />
        )}
      />
    </View>
  );
};

export default CartPage;
