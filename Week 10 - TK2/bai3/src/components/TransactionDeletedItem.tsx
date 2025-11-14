import { View, Text } from "react-native";
import React from "react";
import { Transaction } from "@/types/transaction";
import { Button, Card } from "react-native-paper";

type Props = {
  data: Transaction;
  onRestore: (id: number) => void;
};

const TransactionDeletedItem = ({ data, onRestore }: Props) => {
  return (
    <View className="px-4 py-2">
      <Card>
        <Card.Title title={data.title}></Card.Title>
        <Card.Content>
          <Text>Amount: {data.amount}</Text>
          <Text>Type: {data.type}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => onRestore(data.id)}>
            Restore
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default TransactionDeletedItem;
