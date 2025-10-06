import { Button, Card, TextInput } from "react-native-paper";
import { Todo } from "../types/Todo";
import { Text } from "react-native";
import { useState } from "react";

type Props = {
  onPressCreateBtn: (data: Todo) => void;
};

export const TodoForm = ({ onPressCreateBtn }: Props) => {
  const [input, setInput] = useState("");

  const handlePressCreateBtn = () => {
    if (input.trim()) {
      const data: Todo = {
        id: Date.now().toString(),
        description: input,
        isCompleted: false,
      };

      onPressCreateBtn(data);
      setInput("");
    }
  };

  return (
    <Card style={{ margin: 10, backgroundColor: "gray" }}>
      <Card.Title title="Tạo Todo" />

      <Card.Content>
        <TextInput
          label={"Mô tả công việc"}
          onChangeText={(text) => setInput(text)}
        />
      </Card.Content>

      <Card.Actions>
        <Button
          onPress={handlePressCreateBtn}
          mode="contained"
          buttonColor="blue"
          textColor="white"
        >
          Tạo mới
        </Button>
      </Card.Actions>
    </Card>
  );
};
