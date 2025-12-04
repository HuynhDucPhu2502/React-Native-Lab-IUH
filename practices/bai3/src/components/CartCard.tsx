import { View, Text } from "react-native";
import React from "react";
import { Product } from "@/core/types";
import { Button, Card, Icon } from "react-native-paper";
import { useRouter } from "expo-router";
import { addToCart, removeFromCart, useAppDispatch } from "@/core/store";

type Props = {
  data: Product;
  quantity: number;
};

const CartCard = ({ data, quantity }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <View className="w-full px-4 my-2">
      <Card>
        <Card.Title
          title={data.name}
          subtitle={`#${data.id}`}
          subtitleStyle={{ fontStyle: "italic", color: "gray" }}
          left={() => <Icon source={"cart-arrow-down"} size={32}></Icon>}
        ></Card.Title>
        <Card.Content>
          <Text>Thể loại: {data.category}</Text>
          <Text>Giá: {data.price}</Text>
          <Text>-----------------------</Text>
          <Text>Số lượng: {quantity}</Text>
          <Text>Thành tiền: {quantity * data.price}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => dispatch(addToCart(data))}
            buttonColor="green"
            textColor="white"
          >
            Thêm vào giỏ hàng
          </Button>
          <Button
            mode="contained-tonal"
            onPress={() => dispatch(removeFromCart(data))}
            buttonColor="red"
            textColor="white"
          >
            Lấy khỏi giỏ hàng
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default CartCard;
