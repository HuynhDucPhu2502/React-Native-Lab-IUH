import { View, Text } from "react-native";
import React from "react";
import { Todo } from "@/types/Todo";
import { Button, Card } from "react-native-paper";
import { useSQLiteContext } from "expo-sqlite";

type Props = {
  data: Todo;
  onRestore: (id: number) => void;
};

const TodoDeletedItem = ({ data, onRestore }: Props) => {
  return (
    <View className="my-2 mx-4">
      <Card>
        <Card.Title title={data.title}></Card.Title>
        <Card.Content>
          <Text>Description: {data.description}</Text>
          <Text>Completed: {data.completed ? "Yes" : "No"}</Text>
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

export default TodoDeletedItem;
