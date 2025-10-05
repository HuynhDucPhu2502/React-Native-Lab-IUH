import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Todo } from "../types/Todo";

type TodoCardProps = {
  todo: Todo;
  handleDelete: (id: number) => void;
  handleUpdate: (todo: Todo, id: number) => void;
};

export const TodoCard = ({
  todo,
  handleDelete,
  handleUpdate,
}: TodoCardProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState<string>(todo.title);

  const handleEditting = () => {
    if (isEdit) {
      handleUpdate({ ...todo, title: value }, todo.id);
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  return (
    <View style={style.container}>
      {isEdit ? (
        <TextInput
          style={style.inputContainer}
          onChangeText={(text) => setValue(text)}
          defaultValue={todo.title}
        />
      ) : (
        <Text>{todo.title}</Text>
      )}
      <View style={style.buttonPanel}>
        <Pressable style={[style.buttonContainer, { backgroundColor: "blue" }]}>
          <Text
            style={{ color: "white", textAlign: "center" }}
            onPress={() => handleEditting()}
          >
            {isEdit ? "Xong" : "Cập nhật"}
          </Text>
        </Pressable>
        <Pressable style={[style.buttonContainer, { backgroundColor: "red" }]}>
          <Text
            style={{ color: "white", textAlign: "center" }}
            onPress={() => handleDelete(todo.id)}
          >
            Xóa
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 10,
    flex: 1,
  },

  buttonPanel: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },

  buttonContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
  },
});
