import { View, Text, FlatList } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import { Workout } from "@/types/workout";
import { getAllWorkout, softDeleteworkout } from "@/db";
import { useFocusEffect } from "expo-router";
import WorkoutItem from "../components/WorkoutItem";
import { SegmentedButtons, TextInput } from "react-native-paper";

const WorkoutListPage = () => {
  const db = useSQLiteContext();

  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const [nameSearch, setNameSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("All");

  const handleFetchDb = async () => {
    getAllWorkout(db, 0).then((res) => setWorkouts(res));
  };

  const handleSoftDelete = async (id: number) => {
    softDeleteworkout(db, id).then(() => handleFetchDb());
  };

  useFocusEffect(
    useCallback(() => {
      handleFetchDb();
    }, [db])
  );

  const filteredWorkouts = useMemo(() => {
    return workouts
      .filter((workout) =>
        workout.name.toLowerCase().includes(nameSearch.toLowerCase())
      )
      .filter((workout) =>
        categorySearch === "All" ? true : workout.category === categorySearch
      );
  }, [db, workouts, nameSearch, categorySearch]);

  return (
    <View className="flex flex-1">
      <View className="w-full px-4 gap-4">
        <Text className="text-lg">Searching</Text>
        <TextInput
          label={"Name"}
          value={nameSearch}
          onChangeText={(value) => setNameSearch(value)}
        ></TextInput>
        <SegmentedButtons
          value={categorySearch}
          onValueChange={(value) => setCategorySearch(value)}
          buttons={[
            { label: "All", value: "All" },
            { label: "Cardio", value: "Cardio" },
            { label: "Strength", value: "Strength" },
            { label: "Yoga", value: "Yoga" },
          ]}
        ></SegmentedButtons>
      </View>

      <FlatList
        data={filteredWorkouts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <WorkoutItem onDelete={handleSoftDelete} data={item} />
        )}
      />
    </View>
  );
};

export default WorkoutListPage;
