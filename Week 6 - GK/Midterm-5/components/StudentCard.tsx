import { Button, Card } from "react-native-paper";
import { Student } from "../types/Student";
import { Text } from "react-native";

type Props = {
  data: Student;
  onPressDeleteBtn: (id: string) => void;
};

export const StudentCard = ({ data, onPressDeleteBtn }: Props) => {
  return (
    <Card style={{ margin: 12 }}>
      <Card.Title title={data.name} />
      <Card.Content>
        <Text>City: {data.city}</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={() => onPressDeleteBtn(data.id)}>
          Xóa
        </Button>
      </Card.Actions>
    </Card>
  );
};
