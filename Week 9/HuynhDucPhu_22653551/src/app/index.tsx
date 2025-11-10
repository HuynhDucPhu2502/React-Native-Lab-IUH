import TransactionCard from "@/components/TransactionCard";
import {
  deleteTransactionById,
  getAllTransactions,
  searchTransactions,
} from "@/db/db";
import { TransactionItem } from "@/types/TransactionItem";
import { useFocusEffect, useRouter } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import React, { useCallback, useState, useMemo } from "react";
import { FlatList, View, RefreshControl } from "react-native";
import { FAB, Button, TextInput } from "react-native-paper";

export default function HomePage() {
  const router = useRouter();
  const db = useSQLiteContext();
  const [data, setData] = useState<TransactionItem[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [filter, setFilter] = useState<"ALL" | "INCOME" | "EXPENSE">("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = useCallback(async () => {
    const res = await getAllTransactions(db);
    setData(res);
  }, [db]);

  const handleDeleteTransaction = async (item: TransactionItem) => {
    await deleteTransactionById(db, item.id);
    fetchData();
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.trim().length === 0) {
      fetchData();
    } else {
      const res = await searchTransactions(db, query);
      setData(res);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData])
  );

  const filteredData = useMemo(() => {
    if (filter === "ALL") return data;
    return data.filter((t) => t.type === filter);
  }, [data, filter]);

  return (
    <View className="flex flex-1">
      {/* 🔍 Search Bar */}
      <TextInput
        label="Search by title"
        value={searchQuery}
        onChangeText={handleSearch}
        className="m-2"
        mode="outlined"
      />

      {/* --- Filter Tabs --- */}
      <View className="flex-row justify-around items-center py-2 bg-gray-100">
        <Button
          mode={filter === "ALL" ? "contained" : "outlined"}
          onPress={() => setFilter("ALL")}
        >
          ALL
        </Button>
        <Button
          mode={filter === "INCOME" ? "contained" : "outlined"}
          onPress={() => setFilter("INCOME")}
        >
          INCOME
        </Button>
        <Button
          mode={filter === "EXPENSE" ? "contained" : "outlined"}
          onPress={() => setFilter("EXPENSE")}
        >
          EXPENSE
        </Button>
      </View>

      {/* --- Transaction List --- */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id!.toString()}
        renderItem={({ item }) => (
          <TransactionCard
            item={item}
            onDelete={handleDeleteTransaction}
            onEdit={() =>
              router.push({ pathname: "/form", params: { id: item.id } })
            }
          />
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      {/* --- FAB Buttons --- */}
      <View className="absolute bottom-3 w-full flex-row justify-around">
        <FAB
          icon="plus"
          color="white"
          className="bg-green-500 rounded"
          onPress={() => router.push("/form")}
        />
        <FAB
          icon="delete"
          color="white"
          className="bg-red-500 rounded"
          onPress={() => router.push("/trash")}
        />
        <FAB
          icon="cloud-upload"
          color="white"
          className="bg-blue-500 rounded"
          onPress={() => router.push("/sync")}
        />
        <FAB
          icon="chart-bar"
          color="white"
          className="bg-purple-500 rounded"
          onPress={() => router.push("/statistics")}
        />
      </View>
    </View>
  );
}
