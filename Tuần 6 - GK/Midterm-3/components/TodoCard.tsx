import { Button, Card, TextInput } from "react-native-paper";
import { Todo } from "../types/Todo";
import { Text } from "react-native";
import { useState } from "react";

type Props = {
  data: Todo;
  onPressDeleteBtn: (id: string) => void;
  onUpdate: (data: Todo) => void;
  onPressToggleIsDoneBtn: (data: Todo) => void;
};

export const TodoCard = ({
  data,
  onPressDeleteBtn,
  onUpdate,
  onPressToggleIsDoneBtn,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(data.description);

  const handleEdit = () => {
    if (isEditing) {
      setIsEditing(false);
      if (input === data.description) return;
      else {
        data.description = input;
        setInput("");
        onUpdate(data);
      }
    } else {
      setIsEditing(true);
    }
  };

  return (
    <Card style={{ margin: 8 }}>
      <Card.Title title={isEditing ? "" : data.description} />
      <Card.Content>
        {!isEditing && (
          <Text>{data.isDone ? "Hoàn thành" : "Chưa hoàn thành"}</Text>
        )}

        {isEditing && (
          <TextInput
            value={input}
            label={"Nhập nội dung mới"}
            onChangeText={(text) => setInput(text)}
          />
        )}
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={handleEdit}>
          Cập nhật
        </Button>
        <Button mode="contained" onPress={() => onPressDeleteBtn(data.id)}>
          Xóa
        </Button>
        <Button mode="contained" onPress={() => onPressToggleIsDoneBtn(data)}>
          {data.isDone ? "Bỏ hoàn thành" : "Hoàn thành"}
        </Button>
      </Card.Actions>
    </Card>
  );
};
