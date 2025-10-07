import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { Movie } from "../types/Movie";

type Props = NativeStackScreenProps<RootStackParamList, "MovieForm">;

export const MovieFormScreen = ({ route, navigation }: Props) => {
  const { onCreate, movie, onUpdate } = route.params;

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Movie>({
    id: Date().toString(),
    title: "",
    year: 2025,
    genre: "",
    rating: 5,
    watched: false,
  });

  useEffect(() => {
    if (movie) {
      setIsEditing(true);
      setFormData(movie);
    }
  }, [movie]);

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => {
      return {
        ...prev,
        [key]: key === "year" || key === "rating" ? Number(value) : value,
      };
    });
  };

  const handleCreate = () => {
    onCreate?.(formData);
    navigation.goBack();
  };

  const handleUpdate = () => {
    onUpdate?.(formData);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        label={"Title"}
        onChangeText={(text) => handleChange("title", text)}
        value={formData.title}
      ></TextInput>
      <TextInput
        label={"Year"}
        onChangeText={(text) => handleChange("year", text)}
        value={formData.year.toString()}
      ></TextInput>
      <TextInput
        label={"Genre"}
        onChangeText={(text) => handleChange("genre", text)}
        value={formData.genre}
      ></TextInput>
      <TextInput
        label={"Rating"}
        onChangeText={(text) => handleChange("rating", text)}
        value={formData.rating.toString()}
      ></TextInput>

      {!isEditing && (
        <Button
          onPress={handleCreate}
          mode="contained"
          buttonColor="gray"
          textColor="white"
        >
          Create Movie
        </Button>
      )}

      {isEditing && (
        <Button
          onPress={handleUpdate}
          mode="contained"
          buttonColor="gray"
          textColor="white"
        >
          Update Movie
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 12,
    paddingHorizontal: 12,
  },
});
