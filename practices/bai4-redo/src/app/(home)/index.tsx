import { View, Text, FlatList } from "react-native";
import React, { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/core/store";
import { Button, Icon, SegmentedButtons, TextInput } from "react-native-paper";
import { useRouter } from "expo-router";
import WorkoutCard from "@/components/WorkoutCard";

const HomePage = () => {
  const { workouts } = useAppSelector((state) => state.workout);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const filteredWorkouts = useMemo(() => {
    return workouts
      .filter((x) => x.name.toLowerCase().includes(searchName.toLowerCase()))
      .filter((x) =>
        x.category.toLowerCase().includes(searchCategory.toLowerCase())
      );
  }, [workouts, searchName, searchCategory]);

  if (workouts.length === 0) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="w-full px-4 text-center text-xl ">
          Không có bài tập nào cả
        </Text>
        <Icon source={"emoticon-sad-outline"} size={100} color="purple"></Icon>
        <Button mode="contained" onPress={() => router.push("/(home)/form")}>
          Tạo bài tập
        </Button>
      </View>
    );
  }

  return (
    <View className="flex flex-1  px-4">
      <View className="gap-4 my-2">
        <TextInput
          value={searchName}
          label={"Tìm kiếm tên bài tập"}
          onChangeText={setSearchName}
        />
        <SegmentedButtons
          value={searchCategory}
          onValueChange={setSearchCategory}
          density="small"
          buttons={[
            { label: "All", value: "" },
            { label: "Strength", value: "Strength" },
            { label: "Cardio", value: "Cardio" },
            { label: "Yoga", value: "Yoga" },
          ]}
        ></SegmentedButtons>
      </View>

      <Text className="text-lg font-bold">Danh sách bài tập</Text>
      <FlatList
        data={filteredWorkouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <WorkoutCard data={item} />}
      />
    </View>
  );
};

export default HomePage;
