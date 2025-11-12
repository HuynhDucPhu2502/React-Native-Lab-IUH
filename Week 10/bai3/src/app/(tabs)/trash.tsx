import { View, Text, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import { Transaction } from "@/types/transaction";
import { getAll, restoreTransaction } from "@/db";
import { useFocusEffect } from "expo-router";
import TransactionDeletedItem from "@/components/TransactionDeletedItem";

const TransactionTrashScreen = () => {
  const db = useSQLiteContext();

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleFetchDb = async () => {
    getAll(db, 1).then((res) => setTransactions(res));
  };

  const handleRestore = async (id: number) => {
    restoreTransaction(db, id).then(() => handleFetchDb());
  };

  useFocusEffect(
    useCallback(() => {
      handleFetchDb();
    }, [db])
  );

  return (
    <View className="flex flex-1">
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TransactionDeletedItem
            onRestore={handleRestore}
            data={item}
          ></TransactionDeletedItem>
        )}
      />
    </View>
  );
};

export default TransactionTrashScreen;
