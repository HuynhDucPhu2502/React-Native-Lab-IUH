import { View, Text } from "react-native";
import React from "react";
import { Workout } from "@/types/workout";
import { Button, Card } from "react-native-paper";

type Props = {
  data: Workout;
  onRestore: (id: number) => void;
};

const WorkoutDeletedItem = ({ data, onRestore }: Props) => {
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
          <Button mode="contained" onPress={() => onRestore(data.id)}>
            Restore
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default WorkoutDeletedItem;
