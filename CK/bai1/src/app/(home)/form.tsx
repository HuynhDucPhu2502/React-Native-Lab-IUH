import { View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import { Todo } from "@/core/types";
import { add, update, useAppDispatch, useAppSelector } from "@/core/store";
import { Button, RadioButton, TextInput } from "react-native-paper";
import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";
import { useFetch } from "@/core/useFetch";

const FormPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    content: "",
    isDone: false,
  } as Todo);

  const { POST, GET, PUT } = useFetch(
    "https://68247ed20f0188d7e7298546.mockapi.io/"
  );

  const useDispatch = useAppDispatch();
  const router = useRouter();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      if (id) {
        GET<Todo>(`/todos/${id}`).then((res) => setFormData(res));
      }

      return () => {
        setFormData({
          id: "",
          title: "",
          content: "",
          isDone: false,
        } as Todo);
        (navigation as any).setParams({ id: undefined });
      };
    }, [id])
  );

  const handleSubmit = () => {
    if (id)
      PUT(`/todos/${id}`, formData).then(() => useDispatch(update(formData)));
    else POST("/todos", formData).then(() => useDispatch(add(formData)));

    setFormData({
      id: "",
      title: "",
      content: "",
      isDone: false,
    } as Todo);
    router.push("/(home)");
  };

  return (
    <View className="flex flex-1 justify-center items-center">
      <View className="w-full px-4 gap-4">
        <Text className="my-2 text-xl font-bold">Thông tin chung</Text>
        <TextInput
          label={"Tiêu đề"}
          value={formData.title}
          onChangeText={(value) => setFormData({ ...formData, title: value })}
        />
        <TextInput
          label={"Nội dung"}
          value={formData.content}
          onChangeText={(value) => setFormData({ ...formData, content: value })}
        />
        <Text className="my-2 text-xl font-bold">Trạng thái</Text>
        <RadioButton.Group
          value={formData.isDone ? "1" : "0"}
          onValueChange={(value) =>
            setFormData({ ...formData, isDone: value === "1" })
          }
        >
          <RadioButton.Item label="Hoàn thành" value="1"></RadioButton.Item>
          <RadioButton.Item
            label="Chưa hoàn thành"
            value="0"
          ></RadioButton.Item>
        </RadioButton.Group>

        <Button mode="contained" onPress={handleSubmit}>
          Lưu
        </Button>
      </View>
    </View>
  );
};

export default FormPage;
