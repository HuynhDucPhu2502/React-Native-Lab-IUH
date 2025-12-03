import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useFetch } from "@/core/useFetch";
import { Workout } from "@/core/types";
import { setAll, useAppDispatch, useAppSelector } from "@/core/store";

const SyncPage = () => {
  const [url, setUrl] = useState("");
  const { isLoading, GET, POST, DEL } = useFetch(url);

  const { workouts } = useAppSelector((state) => state.workout);
  const dispatch = useAppDispatch();

  const push = async () => {
    const data: Workout[] = await GET<Workout[]>("");

    for (const item of data) {
      await DEL(`/${item.id}`);
    }

    for (const item of workouts) {
      await POST("", item);
    }
  };

  const get = async () => {
    const data: Workout[] = await GET<Workout[]>("");

    dispatch(setAll(data));
  };

  return (
    <View className="flex flex-1 justify-center items-center">
      <View className="w-full px-4 gap-4">
        <TextInput value={url} onChangeText={(v) => setUrl(v)} label={"URL"} />
        <Button mode="contained" onPress={push} disabled={isLoading}>
          Đẩy thông tin
        </Button>
        <Button mode="contained" onPress={get} disabled={isLoading}>
          Lấy thông tin
        </Button>
      </View>
    </View>
  );
};

export default SyncPage;
