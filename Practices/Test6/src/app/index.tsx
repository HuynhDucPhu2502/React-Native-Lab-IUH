import { Link } from "expo-router";
import React, { useState, useEffect } from "react";
import { Text, View, Button, TextInput, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSQLiteContext } from "expo-sqlite";
import { addTodo, getTodos, deleteTodo, toggleTodo } from "../db/database";

export default function Page() {
  const db = useSQLiteContext(); // 👉 lấy instance DB từ provider
  const { top, bottom } = useSafeAreaInsets();
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<
    { id: number; title: string; done: number }[]
  >([]);

  async function refresh() {
    const result = await getTodos(db);
    setTodos(result);
  }

  async function handleAdd() {
    if (!text.trim()) return;
    await addTodo(db, text);
    setText("");
    await refresh();
  }

  async function handleToggle(id: number, done: number) {
    await toggleTodo(db, id, !done);
    await refresh();
  }

  async function handleDelete(id: number) {
    await deleteTodo(db, id);
    await refresh();
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <View
      style={{ flex: 1, paddingTop: top, paddingBottom: bottom }}
      className="bg-white dark:bg-black"
    >
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text className="text-2xl font-bold mb-3 dark:text-white">
          Todo List
        </Text>

        {/* Input */}
        <View className="flex-row mb-4 gap-2">
          <TextInput
            placeholder="Enter todo..."
            value={text}
            onChangeText={setText}
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 dark:text-white"
          />
          <Button title="Add" onPress={handleAdd} />
        </View>

        {/* Todo items */}
        {todos.map((t) => (
          <View
            key={t.id}
            className="flex-row justify-between items-center py-2 border-b border-gray-200"
          >
            <Text
              className={`flex-1 ${
                t.done
                  ? "text-gray-400 line-through"
                  : "text-black dark:text-white"
              }`}
              onPress={() => handleToggle(t.id, t.done)}
            >
              {t.title}
            </Text>
            <Button title="✕" color="red" onPress={() => handleDelete(t.id)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
