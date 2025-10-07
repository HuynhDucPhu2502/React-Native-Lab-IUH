import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { Movie } from "../types/Movie";
import { ActivityIndicator, Button } from "react-native-paper";
import { MovieCard } from "../components/MovieCard";

const baseUrl = "https://68d67dd6c2a1754b426aeeb4.mockapi.io/";
type Props = NativeStackScreenProps<RootStackParamList, "Watchlist">;

export const WatchlistScreen = ({ navigation }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { isLoading, get, post, put, del } = useFetch(baseUrl);

  const handleFetch = () => {
    get("/movies").then((res) => setMovies(res));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleDelete = (id: string) => {
    del(`/movies/${id}`).then(() => handleFetch());
  };

  const handleCreate = (movie: Movie) => {
    post("/movies", movie).then(() => handleFetch());
  };

  const handleUpdate = (movie: Movie) => {
    put(`/movies/${movie.id}`, movie).then(() => handleFetch());
  };

  const handleToggleWatched = (movie: Movie) => {
    put(`/movies/${movie.id}`, {
      ...movie,
      watched: !movie.watched,
    }).then(() => handleFetch());
  };

  const handleOpenUpdateForm = (movie: Movie) => {
    navigation.navigate("MovieForm", {
      onUpdate: handleUpdate,
      movie,
    });
  };

  if (isLoading)
    return (
      <View style={[styles.container, { justifyContent: "center" }]}>
        <ActivityIndicator size={"large"} animating={true} color="red" />
      </View>
    );

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate("MovieForm", {
            onCreate: handleCreate,
          })
        }
      >
        Add New Movie
      </Button>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={(root) => (
          <MovieCard
            onPressWatchedBtn={handleToggleWatched}
            onPressUpdateBtn={handleOpenUpdateForm}
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
    backgroundColor: "#fff",
  },
});
