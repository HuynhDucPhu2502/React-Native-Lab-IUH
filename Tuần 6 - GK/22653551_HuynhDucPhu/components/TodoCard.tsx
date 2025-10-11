import { Button, Card, Text, TextInput } from "react-native-paper";
import { Todo } from "../types/Todo";
import { useState } from "react";

type Props = {
  data: Todo;
  onUpdate: (data: Todo) => void;
  onPressDeleteBtn: (id: string) => void;
};

export const TodoCard = ({ data, onUpdate, onPressDeleteBtn }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const [input, setInput] = useState(data.title);
  const handleEdit = () => {
    if (isEditing) {
      setIsEditing(false);
      if (data.title === input) return;
      data.title = input;
      onUpdate(data);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <Card style={{ margin: 10 }}>
      <Card.Title title={data.title} />
      <Card.Content>
        {!isEditing && (
          <Text>{data.isDone ? "✅ Hoàn thành" : "❌ Chưa hoàn thành"}</Text>
        )}

        {isEditing && (
          <TextInput value={input} onChangeText={(text) => setInput(text)} />
        )}
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={handleEdit}>
          {isEditing ? "Lưu" : "Sửa"}
        </Button>
        <Button mode="contained" onPress={() => onPressDeleteBtn(data.id)}>
          Xóa
        </Button>
      </Card.Actions>
    </Card>
  );
};
