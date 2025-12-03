import { View, Text, Pressable } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";
import { Workout } from "@/core/types";
import { remove, update, useAppDispatch } from "@/core/store";
import { useRouter } from "expo-router";

type Props = {
  data: Workout;
};

const WorkoutCard = ({ data }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleRemove = () => {
    if (!confirm("Bạn có chắc chắn xóa không?")) return;
    dispatch(remove(data.id));
  };

  const handleToggle = () => {
    dispatch(update({ ...data, completed: !data.completed }));
  };

  return (
    <Pressable className="w-full my-2" onPress={handleToggle}>
      <Card>
        <Card.Title title={data.name}></Card.Title>
        <Card.Content>
          <Text>Thể loại: {data.category}</Text>
          <Text>Thời lượng: {data.duration} phút</Text>
          <Text>
            Trạng thái: {data.completed ? "Hoàn thành" : "Chưa hoàn thành"}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => router.push(`/(home)/form?id=${data.id}`)}
          >
            Cập nhật
          </Button>
          <Button mode="outlined" onPress={handleRemove}>
            Xóa
          </Button>
        </Card.Actions>
      </Card>
    </Pressable>
  );
};

export default WorkoutCard;
