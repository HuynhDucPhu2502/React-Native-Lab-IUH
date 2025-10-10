import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useFetch } from "../hooks/useFetch";
import { ActivityIndicator, Button, Card } from "react-native-paper";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Student } from "../types/Student";
import { StudentCard } from "../components/StudentCard";

type Props = NativeStackScreenProps<RootStackParamList, "StudentsList">;

const baseUrl = "https://68d67dd6c2a1754b426aeeb4.mockapi.io";

export const StudentsListScreen = ({}: Props) => {
  const [students, setStudents] = useState<Student[]>([]);
  const { isLoading, get, post, del } = useFetch(baseUrl);

  const [formData, setFormData] = useState<Student>({
    id: "",
    name: "",
    city: "",
  });
  const handleChangeInput = (value: string, key: string) => {
    setFormData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const handleFetch = useCallback(() => {
    get<Student>("/students").then((res) => setStudents(res));
  }, []);

  const handleCreate = useCallback(() => {
    post("/students", formData).then(() => handleFetch());
  }, [formData]);

  const handleDelete = useCallback((id: string) => {
    del(`/students/${id}`).then(() => handleFetch());
  }, []);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  const sortedStudents = useMemo(() => {
    return [...students].sort((a, b) => a.name.localeCompare(b.name));
  }, [students]);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleRefresh = () => {
    setIsRefreshing(true);
    handleFetch();
    setIsRefreshing(false);
  };

  if (isLoading)
    return (
      <View style={[styles.container, { justifyContent: "center" }]}>
        <ActivityIndicator animating size={"large"} color="purple" />
      </View>
    );

  return (
    <View style={styles.container}>
      <Card style={{ margin: 12 }}>
        <Card.Title title="Tạo mới sinh viên" />
        <Card.Content>
          <TextInput
            style={styles.inputContainer}
            placeholder="Nhập họ tên"
            onChangeText={(text) => handleChangeInput(text, "name")}
          />
          <TextInput
            style={styles.inputContainer}
            placeholder="Nhập quê quán"
            onChangeText={(text) => handleChangeInput(text, "city")}
          />
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={handleCreate}>
            Thêm
          </Button>
        </Card.Actions>
      </Card>

      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
          ></RefreshControl>
        }
        data={sortedStudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudentCard onPressDeleteBtn={handleDelete} data={item} />
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
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "black",
  },
});
