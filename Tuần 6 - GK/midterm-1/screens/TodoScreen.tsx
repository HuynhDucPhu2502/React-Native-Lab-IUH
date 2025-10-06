import { FlatList, StyleSheet, Text, View } from "react-native";
import { useFetch } from "../hooks/useFetch";
import { ActivityIndicator } from "react-native-paper";
import { useEffect, useState } from "react";
import { Todo } from "../types/Todo";
import { TodoCard } from "../components/TodoCard";
import { TodoForm } from "../components/TodoForm";

const baseUrl = "https://68d67dd6c2a1754b426aeeb4.mockapi.io/";

export const TodoScreen = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { isLoading, get, post, put, del } = useFetch(baseUrl);

  const handleFetch = () => {
    get("/todos").then((res) => setTodos(res));
  };

  useEffect(() => handleFetch(), []);

  const handleDelete = async (id: string) => {
    await del(`/todos/${id}`);
    handleFetch();
  };

  const handleCreate = async (data: Todo) => {
    await post("/todos", data);
    handleFetch();
  };

  const handleUpdate = async (id: string, data: Todo) => {
    await put(`/todos/${id}`, data);
    handleFetch();
  };

  if (isLoading)
    return (
      <View style={[styles.container, { justifyContent: "center" }]}>
        <ActivityIndicator size={"large"} animating={true} color="red" />
      </View>
    );

  return (
    <View style={styles.container}>
      <TodoForm onPressCreateBtn={handleCreate} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={(root) => (
          <TodoCard
            onUpdate={handleUpdate}
            onPressDeleteBtn={handleDelete}
            data={root.item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
