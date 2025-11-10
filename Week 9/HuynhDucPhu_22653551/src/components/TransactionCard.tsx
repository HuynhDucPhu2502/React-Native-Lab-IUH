import { View, Text } from "react-native";
import { Card, Button } from "react-native-paper";
import { TransactionItem } from "@/types/TransactionItem";

export default function TransactionCard({
  item,
  onDelete,
  onEdit,
}: {
  item: TransactionItem;
  onDelete: (item: TransactionItem) => void;
  onEdit: (item: TransactionItem) => void;
}) {
  return (
    <Card className="m-2 rounded-xl mx-4 my-2">
      <Card.Content>
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-lg font-semibold">{item.title}</Text>
            <Text className="text-gray-600">{item.type}</Text>
          </View>
          <Text
            className={`text-lg font-bold ${
              item.type === "INCOME" ? "text-green-600" : "text-red-600"
            }`}
          >
            ${item.amount}
          </Text>
        </View>
      </Card.Content>
      <Card.Actions className="flex-row justify-end">
        <Button icon="pencil" textColor="#007bff" onPress={() => onEdit(item)}>
          Edit
        </Button>
        <Button
          icon="delete"
          textColor="#ff4444"
          onPress={() => onDelete(item)}
        >
          Delete
        </Button>
      </Card.Actions>
    </Card>
  );
}
