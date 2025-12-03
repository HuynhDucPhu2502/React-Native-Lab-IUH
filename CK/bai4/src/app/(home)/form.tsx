import { View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import { Workout } from "@/core/types";
import { Button, RadioButton, TextInput } from "react-native-paper";
import { add, update, useAppDispatch, useAppSelector } from "@/core/store";
import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";

const FormPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [formData, setFormData] = useState<Workout>({
    id: new Date().toDateString(),
    category: "Cardio",
    completed: false,
    duration: 0,
    name: "",
  });

  const router = useRouter();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { workouts } = useAppSelector((state) => state.workout);

  useFocusEffect(
    useCallback(() => {
      if (id) {
        const existed = workouts.find((x) => x.id === id);
        if (existed) setFormData(existed);
      }

      return () => {
        setFormData({
          id: new Date().toDateString(),
          category: "Cardio",
          completed: false,
          duration: 0,
          name: "",
        });
        (navigation as any).setParams({ id: undefined });
      };
    }, [id])
  );

  const handleSubmit = () => {
    if (id) dispatch(update(formData));
    else dispatch(add(formData));

    setFormData({
      id: new Date().toDateString(),
      category: "Cardio",
      completed: false,
      duration: 0,
      name: "",
    });

    router.push("/(home)");
  };

  return (
    <View className="flex flex-1 px-4 justify-center items-center">
      <View className="w-full px-4 gap-4">
        <Text className="text-lg font-bold">General information</Text>
        <TextInput
          label={"Name"}
          value={formData.name}
          onChangeText={(v) => setFormData({ ...formData, name: v })}
        />
        <TextInput
          label={"Duration"}
          value={formData.duration.toString()}
          keyboardType="numeric"
          onChangeText={(v) =>
            setFormData({
              ...formData,
              duration: isNaN(Number(v)) ? 0 : Number(v),
            })
          }
        />
        <Text className="text-lg font-bold">Workout type</Text>
        <RadioButton.Group
          value={formData.category}
          onValueChange={(v) =>
            setFormData({
              ...formData,
              category: v as "Cardio" | "Strength" | "Yoga",
            })
          }
        >
          <RadioButton.Item label="Cardio" value="Cardio" />
          <RadioButton.Item label="Strength" value="Strength" />
          <RadioButton.Item label="Yoga" value="Yoga" />
        </RadioButton.Group>
        <Button mode="contained" onPress={handleSubmit}>
          Save
        </Button>
      </View>
    </View>
  );
};

export default FormPage;
