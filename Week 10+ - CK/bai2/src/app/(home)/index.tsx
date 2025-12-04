import { View, Text, ActivityIndicator } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import { useFetch } from "@/core/useFetch";
import { setAll, useAppDispatch, useAppSelector } from "@/core/store";
import { GroceryItem } from "@/core/types";
import { useFocusEffect, useRouter } from "expo-router";
import { FlatList } from "react-native";
import GroceryItemCard from "@/components/GroceryItemCard";
import { FAB, TextInput } from "react-native-paper";

const HomePage = () => {
  const { isLoading, GET } = useFetch();

  const { items } = useAppSelector((state) => state.grocery);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [searchName, setSearchName] = useState("");

  const handleFetchData = () => {
    GET<GroceryItem[]>("/grocery-items").then((res) => dispatch(setAll(res)));
  };

  useFocusEffect(
    useCallback(() => {
      handleFetchData();
    }, [])
  );

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
    );
  }, [items, searchName]);

  if (isLoading) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <ActivityIndicator animating size={"large"} />
      </View>
    );
  }

  if (items.length === 0) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="text-xl font-bold">No items</Text>
      </View>
    );
  }

  return (
    <View className="flex flex-1 px-4 py-4">
      <TextInput
        value={searchName}
        onChangeText={(v) => setSearchName(v)}
        label={"Tìm kiếm theo tên"}
      ></TextInput>

      <Text className="text-xl font-bold">Danh sách hàng cần mua</Text>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GroceryItemCard data={item} />}
      />

      <FAB
        className="bg-green-500 absolute bottom-4 right-4"
        icon={"plus"}
        color="white"
        onPress={() => router.push("/(home)/form")}
      ></FAB>
    </View>
  );
};

export default HomePage;
