import { View, Text } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";
import { Product } from "@/core/types";
import { useRouter } from "expo-router";
import { addToCart, removeFromCart, useAppDispatch } from "@/core/store";

type Props = {
  data: Product;
  quantity: number;
};

const CartCard = ({ data, quantity }: Props) => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  return (
    <View className="w-full px-4 my-4">
      <Card>
        <Card.Title title={data.name}></Card.Title>
        <Card.Content>
          <Text>Thể loại: {data.category}</Text>
          <Text>Giá: {data.price}</Text>
          <Text>Số lượng: {quantity}</Text>
          <Text>Thành tiền: {quantity * data.price}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => dispatch(addToCart(data))}
            buttonColor="green"
          >
            Thêm giỏ hàng
          </Button>
          <Button
            mode="contained"
            onPress={() => dispatch(removeFromCart(data.id))}
            buttonColor="red"
          >
            Lấy khỏi giỏ hàng
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default CartCard;
