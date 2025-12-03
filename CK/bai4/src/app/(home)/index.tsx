import { View, Text, FlatList } from "react-native";
import React, { useMemo, useState } from "react";
import { useAppSelector } from "@/core/store";
import WorkoutCard from "@/components/WorkoutCard";
import { SegmentedButtons, TextInput } from "react-native-paper";

const HomePage = () => {
  const { workouts } = useAppSelector((state) => state.workout);

  const [searchName, setSearchName] = useState("");
  const [searchCategory, setCategory] = useState("");

  const filteredWorkouts = useMemo(() => {
    return workouts
      .filter((x) => x.name.toLowerCase().includes(searchName.toLowerCase()))
      .filter((x) => x.category.includes(searchCategory));
  }, [searchCategory, searchName, workouts]);

  return (
    <View className="flex flex-1 px-2">
      <View className="gap-4 py-4">
        <Text>Tìm kiếm</Text>
        <TextInput
          value={searchName}
          onChangeText={(v) => setSearchName(v)}
          label={"Tìm kiếm theo tên"}
        />
        <SegmentedButtons
          value={searchCategory}
          onValueChange={(v) => setCategory(v)}
          buttons={[
            { label: "All", value: "" },
            { label: "Cardio", value: "Cardio" },
            { label: "Strength", value: "Strength" },
            { label: "Yoga", value: "Yoga" },
          ]}
        />
      </View>

      <FlatList
        data={filteredWorkouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <WorkoutCard data={item} />}
      />
    </View>
  );
};

export default HomePage;
