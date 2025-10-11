import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useFetch } from "../hooks/useFetch";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Todo } from "../types/Todo";
import { ActivityIndicator, Button, Card } from "react-native-paper";
import { TodoCard } from "./TodoCard";

const baseUrl = "";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { isLoading, get, post, put, del } = useFetch(baseUrl);

  const [input, setInput] = useState("");
  const inputRef = useRef<TextInput>(null);

  const [search, setSearch] = useState("");

  const handleFetch = useCallback(() => {
    get<Todo>("").then((res) => setTodos(res));
  }, []);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleCreate = () => {
    const data: Todo = {
      id: "",
      title: input,
      isDone: false,
    };

    post("", data).then(() => handleFetch());
    setInput("");
    inputRef.current?.clear();
    handleFetch();
  };

  const handleUpdate = useCallback((data: Todo) => {
    put(`/${data.id}`, data).then(() => handleFetch());
  }, []);

  const handleDelete = useCallback((id: string) => {
    del(`/${id}`).then(() => handleFetch());
  }, []);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleRefresh = () => {
    setIsRefreshing(true);
    handleFetch();
    setIsRefreshing(false);
  };

  const sortedTodo = useMemo(() => {
    if (search.trim() === "") return [...todos];
    else return [...todos].filter((a) => a.title.includes(search));
  }, [search]);

  if (isLoading)
    return (
      <View style={[styles.container, { justifyContent: "center" }]}>
        <ActivityIndicator
          animating
          size={"large"}
          color="purple"
        ></ActivityIndicator>
      </View>
    );

  return (
    <View style={styles.container}>
      <Card style={{ margin: 10 }}>
        <Card.Title title="Thêm Todo" />
        <Card.Content>
          <TextInput
            ref={inputRef}
            style={styles.inputContainer}
            onChangeText={(text) => setInput(text)}
          />
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={handleCreate}>
            Thêm
          </Button>
        </Card.Actions>
      </Card>

      <Card style={{ margin: 10 }}>
        <Card.Title title="Tìm kiếm" />
        <Card.Content>
          <TextInput
            style={styles.inputContainer}
            onChangeText={(text) => setSearch(text)}
          />
        </Card.Content>
      </Card>

      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
          ></RefreshControl>
        }
        data={sortedTodo.length == 0 ? todos : sortedTodo}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TodoCard
            onPressDeleteBtn={handleDelete}
            onUpdate={handleUpdate}
            data={item}
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

  inputContainer: {
    padding: 8,
    borderWidth: 1,
    borderColor: "black",
  },
});
