import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFetch } from "./hooks/useFetch";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Todo } from "./types/Todo";
import { ActivityIndicator, Button, Card } from "react-native-paper";
import { TodoCard } from "./components/TodoCard";

const baseUrl = "https://68d67dd6c2a1754b426aeeb4.mockapi.io/";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { isLoading, get, post, put, del } = useFetch(baseUrl);

  const [input, setInput] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleFetch = useCallback(async () => {
    get<Todo>("/todos").then((res) => setTodos(res));
  }, []);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleCreate = useCallback(async () => {
    if (input.trim()) {
      const data: Todo = {
        id: "",
        description: input,
        isDone: false,
      };

      inputRef.current?.clear();
      post("/todos", data).then(() => handleFetch());
    }
  }, [input]);

  const handleDelete = useCallback(async (id: string) => {
    del(`/todos/${id}`).then(() => handleFetch());
  }, []);

  const handleUpdate = async (data: Todo) => {
    put(`/todos/${data.id}`, data).then(() => handleFetch());
  };

  const handleToggleIsDone = async (data: Todo) => {
    put(`/todos/${data.id}`, {
      ...data,
      isDone: !data.isDone,
    }).then(() => handleFetch());
  };

  const sortedTodos = useMemo(() => {
    const newTodo: Todo[] = [...todos];

    return newTodo.sort((a, b) => {
      if (a.isDone !== b.isDone) return a.isDone ? 1 : -1;
      return Number(b.id) - Number(a.id);
    });
  }, [todos]);

  if (isLoading)
    return (
      <View style={[styles.container, { justifyContent: "center" }]}>
        <Text style={styles.title}>Todo App</Text>
        <ActivityIndicator animating size={"large"} color="purple" />
      </View>
    );

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Todo App</Text>

        <Card style={{ margin: 8 }}>
          <Card.Title title="Thêm công việc" />
          <Card.Content>
            <TextInput
              placeholder="Nhập nội dung"
              style={styles.inputContainer}
              ref={inputRef}
              onChangeText={(text) => setInput(text)}
            />
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={handleCreate}>
              Thêm mới
            </Button>
          </Card.Actions>
        </Card>

        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={handleFetch}
            ></RefreshControl>
          }
          data={sortedTodos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoCard
              onPressToggleIsDoneBtn={handleToggleIsDone}
              onUpdate={handleUpdate}
              onPressDeleteBtn={handleDelete}
              data={item}
            />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },

  inputContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
  },
});
