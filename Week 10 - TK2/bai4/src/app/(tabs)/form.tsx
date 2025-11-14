import { View, Text, ScrollView } from "react-native";
import React, { useCallback, useState } from "react";
import { Workout } from "@/types/workout";
import { Button, RadioButton, TextInput } from "react-native-paper";
import { useSQLiteContext } from "expo-sqlite";
import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";
import { createWorkout, getWorkoutById, updateWorkout } from "@/db";

const WorkoutFormPage = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();

  const [formData, setFormData] = useState<Workout>({} as Workout);

  const db = useSQLiteContext();
  const navigation = useNavigation();
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      if (id) getWorkoutById(db, Number(id)).then((res) => setFormData(res));

      return () => {
        setFormData({} as Workout);
        (navigation as any).setParams({ id: undefined });
      };
    }, [id])
  );

  const handleSave = async () => {
    if (id) await updateWorkout(db, formData);
    else await createWorkout(db, formData);

    setFormData({} as Workout);
    router.navigate("/(tabs)/list");
  };

  return (
    <ScrollView className="flex flex-1">
      <View className="w-full px-4 gap-4">
        <Text className="text-lg">New Workout</Text>
        <TextInput
          label={"Name"}
          value={formData.name ?? ""}
          onChangeText={(value) => setFormData({ ...formData, name: value })}
        ></TextInput>

        <TextInput
          label={"Duration"}
          keyboardType="number-pad"
          value={formData.duration ? formData.duration.toString() : ""}
          onChangeText={(value) =>
            setFormData({ ...formData, duration: Number(value) })
          }
        ></TextInput>

        <RadioButton.Group
          value={formData.category}
          onValueChange={(value) =>
            setFormData({
              ...formData,
              category: value as "Cardio" | "Strength" | "Yoga",
            })
          }
        >
          <Text className="text-lg">Workout type</Text>
          <RadioButton.Item label="Cardio" value="Cardio"></RadioButton.Item>
          <RadioButton.Item
            label="Strength"
            value="Strength"
          ></RadioButton.Item>
          <RadioButton.Item label="Yoga" value="Yoga"></RadioButton.Item>
        </RadioButton.Group>

        <RadioButton.Group
          value={formData.completed ? "1" : "0"}
          onValueChange={(value) =>
            setFormData({
              ...formData,
              completed: value === "1" ? true : false,
            })
          }
        >
          <Text className="text-lg">Progress</Text>
          <RadioButton.Item label="Done" value="1"></RadioButton.Item>
          <RadioButton.Item label="Not done" value="0"></RadioButton.Item>
        </RadioButton.Group>
        <Button mode="contained" onPress={handleSave}>
          Save
        </Button>
      </View>
    </ScrollView>
  );
};

export default WorkoutFormPage;
