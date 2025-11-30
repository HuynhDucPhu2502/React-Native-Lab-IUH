import { View, Text } from "react-native";
import React from "react";
import { GroceryItem } from "@/core/types";
import { Button, Card } from "react-native-paper";
import { useFetch } from "@/core/useFetch";
import { remove, update, useAppDispatch } from "@/core/store";
import { useRouter } from "expo-router";

type Props = {
  data: GroceryItem;
};

const GroceryItemCard = ({ data }: Props) => {
  const { PUT, DEL } = useFetch();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleToggle = () => {
    PUT(`/grocery-items/${data.id}`, { ...data, bought: !data.bought }).then(
      () => {
        dispatch(update({ ...data, bought: !data.bought }));
      }
    );
  };

  const handleDelete = () => {
    if (!confirm("Bạn muốn xóa không?")) return;

    DEL(`/grocery-items/${data.id}`).then(() => dispatch(remove(data.id)));
  };

  return (
    <View className="px-4 w-full my-4">
      <Card onPress={handleToggle}>
        <Card.Title title={data.name}></Card.Title>
        <Card.Content>
          <Text>Category: {data.category}</Text>
          <Text>Quantity: {data.quantity}</Text>
          <Text>Created At: {data.created_at}</Text>
          <Text>Status: {data.bought ? "Bought" : "Not Bought"}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => router.push(`/(home)/form?id=${data.id}`)}
          >
            Update
          </Button>
          <Button mode="outlined" onPress={handleDelete}>
            Delete
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default GroceryItemCard;
