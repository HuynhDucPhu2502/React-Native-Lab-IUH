import { View, Text, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import { Todo } from "@/types/Todo";
import { deleteTodo, getAll } from "@/db";
import { useFocusEffect, useRouter } from "expo-router";
import { FAB } from "react-native-paper";
import TodoItem from "./components/TodoItem";

const HomeScreen = () => {
  const db = useSQLiteContext();
  const router = useRouter();

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleFetchDb = () => {
    getAll(db, 0).then((data) => setTodos(data));
  };

  const handleDelete = (id: number) => {
    deleteTodo(db, id).then(() => handleFetchDb());
  };

  useFocusEffect(
    useCallback(() => {
      handleFetchDb();
    }, [])
  );

  return (
    <View className="flex flex-1">
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem data={item} onDelete={handleDelete}></TodoItem>
        )}
      ></FlatList>

      <FAB
        className="absolute bottom-3 right-3 rounded-full bg-green-500"
        icon={"plus"}
        color="white"
        onPress={() => router.navigate("/form")}
      ></FAB>
      <FAB
        className="absolute bottom-3 left-3 rounded-full bg-red-500"
        icon={"trash-can"}
        color="white"
        onPress={() => router.navigate("/trash")}
      ></FAB>
    </View>
  );
};

export default HomeScreen;
