import { View, Text, FlatList } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import { Transaction } from "@/types/transaction";
import { getAll, softDeleteTransaction } from "@/db";
import { useFocusEffect } from "expo-router";
import TransactionItem from "@/components/TransactionItem";
import { SegmentedButtons, TextInput } from "react-native-paper";

const TransactionListScreen = () => {
  const db = useSQLiteContext();

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [titleSearch, setTitleSearch] = useState("");
  const [typeSearch, setTypeSearch] = useState("all");

  const handleFetchDb = async () => {
    getAll(db, 0).then((res) => setTransactions(res));
  };

  const handleSoftDelete = async (id: number) => {
    softDeleteTransaction(db, id).then(() => handleFetchDb());
  };

  useFocusEffect(
    useCallback(() => {
      handleFetchDb();
    }, [db])
  );

  const filteredTransactions = useMemo(() => {
    return transactions
      .filter((item) => item.title.includes(titleSearch))
      .filter((item) =>
        typeSearch === "all" ? true : item.type === typeSearch
      );
  }, [titleSearch, typeSearch, transactions]);

  return (
    <View className="flex flex-1">
      <View className="px-4 gap-4 my-4">
        <Text className="text-xl">Searching</Text>
        <TextInput
          label={"Title"}
          onChangeText={(value) => setTitleSearch(value)}
        ></TextInput>
        <SegmentedButtons
          value={typeSearch}
          onValueChange={(value) => setTypeSearch(value)}
          buttons={[
            { value: "all", label: "All" },
            { value: "Income", label: "Income" },
            { value: "Expense", label: "Expense" },
          ]}
        ></SegmentedButtons>
      </View>

      <FlatList
        data={filteredTransactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TransactionItem
            onDelete={handleSoftDelete}
            data={item}
          ></TransactionItem>
        )}
      />
    </View>
  );
};

export default TransactionListScreen;
