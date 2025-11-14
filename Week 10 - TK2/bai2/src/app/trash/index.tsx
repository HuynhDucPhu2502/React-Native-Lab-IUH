import { View, Text, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { getAll, restoreTodo } from "@/db";
import { useFocusEffect, useRouter } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { Todo } from "@/types/Todo";
import TodoDeletedItem from "./components/TodoDeletedItem";

const TrashScreen = () => {
  const db = useSQLiteContext();

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleFetchDb = () => {
    getAll(db, 1).then((data) => setTodos(data));
  };

  const handleRestore = (id: number) => {
    restoreTodo(db, id).then(() => handleFetchDb());
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
          <TodoDeletedItem onRestore={handleRestore} data={item} />
        )}
      ></FlatList>
    </View>
  );
};

export default TrashScreen;
