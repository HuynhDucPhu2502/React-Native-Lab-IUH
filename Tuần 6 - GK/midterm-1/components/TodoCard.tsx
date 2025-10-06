import { Button, Card, TextInput } from "react-native-paper";
import { Todo } from "../types/Todo";
import { Text } from "react-native";
import { useEffect, useState } from "react";

type Props = {
  data: Todo;
  onPressDeleteBtn: (id: string) => void;
  onUpdate: (id: string, data: Todo) => void;
};

export const TodoCard = ({ data, onPressDeleteBtn, onUpdate }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState<string>(data.description);

  const handleEdit = () => {
    if (isEditing) {
      const updatedTodo: Todo = {
        ...data,
        description: input,
      };

      onUpdate(data.id, updatedTodo);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleCompleted = () => {
    const updatedTodo: Todo = {
      ...data,
      isCompleted: !data.isCompleted,
    };

    onUpdate(data.id, updatedTodo);
  };

  useEffect(() => {
    setInput(data.description);
  }, [data.description]);

  return (
    <Card style={{ margin: 10, backgroundColor: "dimgray" }}>
      <Card.Title
        title={`${data.isCompleted ? "Hoàn thành" : "Chưa hoàn thành"}`}
      />
      <Card.Content>
        {isEditing && (
          <TextInput
            label={"Mô tả công việc"}
            onChangeText={(text) => setInput(text)}
            value={input}
          />
        )}

        {!isEditing && (
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {data.description}
          </Text>
        )}
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={handleEdit}
          mode="contained"
          buttonColor="blue"
          textColor="white"
        >
          Cập nhật
        </Button>
        <Button
          onPress={() => onPressDeleteBtn(data.id)}
          mode="contained"
          buttonColor="red"
          textColor="white"
        >
          Xóa
        </Button>
        <Button
          onPress={handleCompleted}
          mode="contained"
          buttonColor="green"
          textColor="white"
        >
          Hoàn thành
        </Button>
      </Card.Actions>
    </Card>
  );
};
