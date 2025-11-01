import { Button, Card, Text } from "react-native-paper";
import { Movie } from "../types/Movie";

type Props = {
  data: Movie;
  onPressDeleteBtn: (id: string) => void;
  onPressUpdateBtn: (movie: Movie) => void;
  onPressWatchedBtn: (movie: Movie) => void;
};

export const MovieCard = ({
  data,
  onPressDeleteBtn,
  onPressUpdateBtn,
  onPressWatchedBtn,
}: Props) => {
  return (
    <Card style={{ backgroundColor: "purple", margin: 12 }}>
      <Card.Title title={data.title} />
      <Card.Content>
        <Text>Year: {data.year}</Text>
        <Text>Genre: {data.genre}</Text>
        <Text>Rating: {data.rating}</Text>
        <Text>{data.watched ? "Watched" : "Not watch yet"}</Text>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => onPressUpdateBtn(data)}
          mode="contained"
          buttonColor="blue"
          textColor="white"
        >
          Update
        </Button>
        <Button
          onPress={() => onPressDeleteBtn(data.id)}
          mode="contained"
          buttonColor="red"
          textColor="white"
        >
          Delete
        </Button>
        <Button
          onPress={() => onPressWatchedBtn(data)}
          mode="contained"
          buttonColor="green"
          textColor="white"
        >
          Mark as watched
        </Button>
      </Card.Actions>
    </Card>
  );
};
