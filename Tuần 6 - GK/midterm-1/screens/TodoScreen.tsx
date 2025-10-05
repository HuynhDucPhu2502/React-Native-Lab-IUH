import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { Todo } from "../types/Todo";
import { TodoCard } from "../components/TodoCard";
import { TodoForm } from "../components/TodoForm";

const baseUrl = "https://drooly-uncentred-doug.ngrok-free.dev";

export const TodoScreen = () => {
  const { get, post, put, del, isLoading, error } = useFetch(baseUrl);

  const [todos, setTodos] = useState<Todo[]>([]);

  const getData = async () => {
    get<Todo[]>("/todos").then((data) => {
      if (data) setTodos(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id: number) => {
    del(`/todos/${id}`).then(() => getData());
  };

  const handleCreate = (todo: Todo) => {
    post("/todos", todo).then(() => getData());
  };

  const handleUpdate = (todo: Todo, id: number) => {
    put(`/todos/${id}`, todo).then(() => getData());
  };

  if (isLoading)
    return <ActivityIndicator size="large" color="red" animating={true} />;

  return (
    <View style={{ padding: 20 }}>
      <TodoForm onCreate={handleCreate} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => (
          <TodoCard
            todo={item.item}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          ></TodoCard>
        )}
      />
    </View>
  );
};
