import { View, Text } from "react-native";
import React from "react";
import { Workout } from "@/types/workout";
import { Button, Card } from "react-native-paper";
import { useRouter } from "expo-router";

type Props = {
  data: Workout;
  onDelete: (id: number) => void;
};

const WorkoutItem = ({ data, onDelete }: Props) => {
  const router = useRouter();

  const onPressEdit = () => {
    router.push({
      pathname: "/(tabs)/form",
      params: { id: data.id.toString() },
    });
  };

  return (
    <View className="px-4 my-2">
      <Card>
        <Card.Title title={data.name}></Card.Title>
        <Card.Content>
          <Text>Duration: {data.duration}</Text>
          <Text>Category: {data.category}</Text>
          <Text>Status: {data.completed ? "Done" : "Not done yet"}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={onPressEdit}>
            Edit
          </Button>
          <Button mode="contained" onPress={() => onDelete(data.id)}>
            Delete
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default WorkoutItem;
