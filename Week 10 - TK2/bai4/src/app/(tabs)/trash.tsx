import { View, Text, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import WorkoutDeletedItem from "../components/WorkoutDeletedItem";
import { useFocusEffect } from "expo-router";
import { getAllWorkout, restoreWorkout } from "@/db";
import { useSQLiteContext } from "expo-sqlite";
import { Workout } from "@/types/workout";

const WorkoutTrashPage = () => {
  const db = useSQLiteContext();

  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const handleFetchDb = async () => {
    getAllWorkout(db, 1).then((res) => setWorkouts(res));
  };

  const handleRestore = async (id: number) => {
    restoreWorkout(db, id).then(() => handleFetchDb());
  };

  useFocusEffect(
    useCallback(() => {
      handleFetchDb();
    }, [db])
  );

  return (
    <View className="flex flex-1">
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <WorkoutDeletedItem onRestore={handleRestore} data={item} />
        )}
      />
    </View>
  );
};

export default WorkoutTrashPage;
