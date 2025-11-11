import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, RadioButton, TextInput } from "react-native-paper";
import { useSQLiteContext } from "expo-sqlite";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getById, saveTodo, updateTodo } from "@/db";
import { Todo } from "@/types/Todo";

const FormScreen = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const db = useSQLiteContext();
  const router = useRouter();

  const [formData, setFormData] = useState<Todo>({} as Todo);
  const [value, setValue] = useState("0");

  useEffect(() => {
    if (id != null) {
      getById(db, Number(id)).then((data) => {
        setFormData(data);
        setValue(data.completed ? "1" : "0");
      });
    }
  }, []);

  const handleSave = async () => {
    const payload: Todo = {
      ...formData,
      completed: value === "1" ? true : false,
    };

    if (id) await updateTodo(db, payload);
    else await saveTodo(db, payload);

    router.back();
  };

  return (
    <View className="flex flex-1 items-center justify-center">
      <View className="w-full px-4 gap-4">
        <Text>New Todo</Text>
        <TextInput
          label={"Title"}
          onChangeText={(value) =>
            setFormData((prev) => ({ ...prev, title: value }))
          }
          value={formData.title}
        ></TextInput>
        <TextInput
          label={"Description"}
          onChangeText={(value) =>
            setFormData((prev) => ({ ...prev, description: value }))
          }
          value={formData.description}
        ></TextInput>
        <RadioButton.Group value={value} onValueChange={setValue}>
          <Text className="text-lg">Status</Text>
          <RadioButton.Item label="Not completed" value="0"></RadioButton.Item>
          <RadioButton.Item label="Completed" value="1"></RadioButton.Item>
        </RadioButton.Group>
        <Button mode="contained" onPress={handleSave}>
          Save
        </Button>
      </View>
    </View>
  );
};

export default FormScreen;
