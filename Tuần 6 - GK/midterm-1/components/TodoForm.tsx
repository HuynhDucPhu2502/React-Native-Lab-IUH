import React, { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Todo } from "../types/Todo";

type Props = {
  onCreate: (todo: Todo) => void;
};

export const TodoForm = ({ onCreate }: Props) => {
  const [input, setInput] = useState<string | undefined>(undefined);

  const handleOnClick = () => {
    if (input) {
      const todo: Todo = {
        id: Date.now(),
        title: input,
        completed: false,
      };

      onCreate(todo);
      setInput("");
      return;
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Tạo việc cần làm</Text>
      <TextInput
        placeholder="Nhập tiêu đề vào đây"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Button title="Tạo" onPress={handleOnClick}></Button>
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

  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
