import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/core/store";
import CartCard from "@/components/CartCard";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const { items, name, total } = useAppSelector((state) => state.cart);

  return (
    <View className="flex flex-1 px-4 py-2">
      <Text>
        Xin chào {name}, hiện tại tổng tiền là {total}
      </Text>
      <Text className="text-lg font-bold my-2">Danh sách giỏ hàng</Text>
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
