import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useFetch } from "@/core/useFetch";
import { Workout } from "@/core/types";
import { useAppSelector } from "@/core/store";

const SyncPage = () => {
  const [url, setUrl] = useState("");
  const { GET, POST, DEL, isLoading } = useFetch(url);

  const { workouts } = useAppSelector((state) => state.workout);

  const handlePost = async () => {
    const data: Workout[] = await GET<Workout[]>("");
    for (const item of data) {
      await DEL(`/${item.id}`);
    }

    for (const item of workouts) {
      await POST(``, item);
    }
  };

  return (
    <View className="flex flex-1 justify-center items-center">
      <View className="w-full px-4 gap-4">
        <Text className="text-xl font-bold text-center">Lấy thông tin</Text>
        <TextInput label={"URL"} value={url} onChangeText={setUrl} />
        <Button mode="contained" disabled={isLoading} onPress={handlePost}>
          Sync
        </Button>
      </View>
    </View>
  );
};

export default SyncPage;
