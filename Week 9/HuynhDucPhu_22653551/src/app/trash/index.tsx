import React, { useCallback, useState } from "react";
import { View, Text, FlatList, Alert, TouchableOpacity } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import {
  getDeletedTransactions,
  restoreTransactionById,
  searchDeletedTransactions,
} from "@/db/db";
import { TransactionItem } from "@/types/TransactionItem";
import { Card, TextInput } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";

const TrashScreen = () => {
  const db = useSQLiteContext();
  const [deletedItems, setDeletedItems] = useState<TransactionItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchDeleted = useCallback(async () => {
    const data = await getDeletedTransactions(db);
    setDeletedItems(data);
  }, [db]);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.trim().length === 0) {
      fetchDeleted();
    } else {
      const res = await searchDeletedTransactions(db, query);
      setDeletedItems(res);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchDeleted();
    }, [fetchDeleted])
  );

  const handleRestore = async (id: number) => {
    await restoreTransactionById(db, id);
    await fetchDeleted();
  };

  const renderItem = ({ item }: { item: TransactionItem }) => (
    <TouchableOpacity
      onLongPress={() => {
        Alert.alert(
          "Khôi phục giao dịch",
          `Bạn có muốn khôi phục "${item.title}" không?`,
          [
            { text: "Hủy", style: "cancel" },
            { text: "Khôi phục", onPress: () => handleRestore(item.id) },
          ]
        );
      }}
    >
      <Card className="m-2 rounded-xl mx-2 my-4">
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
      </Card>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white">
      {/* 🔍 Search Bar */}
      <TextInput
        label="Search deleted transactions"
        value={searchQuery}
        onChangeText={handleSearch}
        className="m-2"
        mode="outlined"
      />

      <FlatList
        data={deletedItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text className="text-center mt-6 text-gray-500">
            No deleted items
          </Text>
        }
      />
    </View>
  );
};

export default TrashScreen;
