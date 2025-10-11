import { BottomNavigationProps } from "react-native-paper";
import { RootTabParamList } from "../App";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TodoList } from "../components/TodoList";
import { StyleSheet, Text } from "react-native";

type Props = BottomTabScreenProps<RootTabParamList, "TodoList">;

export const TodoListScreen = ({}: Props) => {
  return (
    <>
      <TodoList />
    </>
  );
};
