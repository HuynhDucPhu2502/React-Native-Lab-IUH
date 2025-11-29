import { View, Text, FlatList } from "react-native";
import React, { useCallback } from "react";
import { useFetch } from "@/core/useFetch";
import { ActivityIndicator } from "react-native-paper";
import { setTodos, useAppDispatch, useAppSelector } from "@/core/store";
import { Todo } from "@/core/types";
import { useFocusEffect } from "expo-router";
import TodoItem from "@/components/TodoItem";

const HomePage = () => {
  const { isLoading, GET } = useFetch(
    "https://68247ed20f0188d7e7298546.mockapi.io/"
  );

  const { todos } = useAppSelector((state) => state.todo);
  const useDispatch = useAppDispatch();

  const handleFetch = () => {
    GET<Todo[]>("/todos").then((res) => useDispatch(setTodos(res)));
  };

  useFocusEffect(
    useCallback(() => {
      handleFetch();
    }, [])
  );

  if (isLoading) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <ActivityIndicator animating={true} size={"large"} />
      </View>
    );
  }

  return (
    <View className="flex flex-1">
      <Text className="my-2 text-xl font-bold">Home Page</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoItem data={item} />}
      />
    </View>
  );
};

export default HomePage;
