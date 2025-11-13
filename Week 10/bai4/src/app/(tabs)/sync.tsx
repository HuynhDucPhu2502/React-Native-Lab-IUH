import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useSQLiteContext } from "expo-sqlite";
import { Workout } from "@/types/workout";
import { getAllWorkout } from "@/db";

const WorkoutSyncPage = () => {
  const [apiUrl, setApiUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const db = useSQLiteContext();

  const handleSync = async () => {
    if (apiUrl === "") return;

    setIsLoading(true);

    const apiData = (await fetch(apiUrl).then((res) =>
      res.json()
    )) as Workout[];
    for (const data of apiData) {
      fetch(`${apiUrl}/${data.id}`, { method: "DELETE" });
    }

    const localData = await getAllWorkout(db, 0);
    for (const data of localData) {
      fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }

    setIsLoading(false);
  };

  return (
    <View className="flex flex-1 justify-center items-center">
      <View className="px-4 gap-4 w-full">
        <TextInput
          label={"API URL"}
          value={apiUrl}
          onChangeText={(value) => setApiUrl(value)}
        />
        <Button disabled={isLoading} onPress={handleSync} mode="contained">
          Sync
        </Button>
      </View>
    </View>
  );
};

export default WorkoutSyncPage;
