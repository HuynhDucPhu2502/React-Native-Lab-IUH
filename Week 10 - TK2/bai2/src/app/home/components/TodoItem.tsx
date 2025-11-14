import { View, Text } from "react-native";
import React from "react";
import { Todo } from "@/types/Todo";
import { Button, Card } from "react-native-paper";
import { useRouter } from "expo-router";

type Props = {
  data: Todo;
  onDelete: (id: number) => void;
};

const TodoItem = ({ data, onDelete }: Props) => {
  const router = useRouter();

  return (
    <View className="my-2 mx-4">
      <Card>
        <Card.Title title={data.title}></Card.Title>
        <Card.Content>
          <Text>Description: {data.description}</Text>
          <Text>Completed: {data.completed ? "Yes" : "No"}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() =>
              router.push({ pathname: "/form", params: { id: data.id } })
            }
          >
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

export default TodoItem;
