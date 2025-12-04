import { View, Text } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";
import { Product } from "@/core/types";
import { useRouter } from "expo-router";
import { addToCart, useAppDispatch } from "@/core/store";

type Props = {
  data: Product;
};

const ProductCard = ({ data }: Props) => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  return (
    <View className="w-full px-4 my-4">
      <Card>
        <Card.Title title={data.name}></Card.Title>
        <Card.Content>
          <Text>Thể loại: {data.category}</Text>
          <Text>Giá: {data.price}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => dispatch(addToCart(data))}>
            Thêm giỏ hàng
          </Button>
          <Button
            mode="contained"
            onPress={() => router.push(`/(home)/product-details?id=${data.id}`)}
          >
            Xem chi tiết
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default ProductCard;
