import { View, Text } from "react-native";
import React from "react";
import { Button, Card, Icon } from "react-native-paper";
import { Workout } from "@/core/types";
import { remove, useAppDispatch } from "@/core/store";
import { useRouter } from "expo-router";

type Props = {
  data: Workout;
};

const WorkoutCard = ({ data }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleDelete = () => {
    if (!confirm("Bạn chắc chắn muốn xóa?")) return;

    dispatch(remove(data.id));
  };

  return (
    <View className="w-full px-4 my-2">
      <Card mode="elevated">
        <Card.Title
          title={data.name}
          subtitle={data.id}
          subtitleStyle={{ fontStyle: "italic", color: "gray" }}
          left={() => <Icon source={"dumbbell"} size={48}></Icon>}
        ></Card.Title>
        <Card.Content>
          <Text>Loại bài tập: {data.category}</Text>
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
          <Button mode="contained-tonal" onPress={handleDelete}>
            Xóa
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default WorkoutCard;
