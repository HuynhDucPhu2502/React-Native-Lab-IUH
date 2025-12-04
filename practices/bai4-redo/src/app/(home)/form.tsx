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
    id: Date.now().toString(),
    name: "",
    category: "Cardio",
    completed: false,
    duration: 0,
  });

  const dispatch = useAppDispatch();
  const { workouts } = useAppSelector((state) => state.workout);
  const router = useRouter();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      if (id) {
        const item = workouts.find((x) => x.id === id);
        if (item) {
          setFormData(item);
        }
      }

      return () => {
        setFormData({
          id: Date.now().toString(),
          name: "",
          category: "Cardio",
          completed: false,
          duration: 0,
        });
        (navigation as any).setParams({ id: undefined });
      };
    }, [id])
  );

  const handleSubmit = () => {
    if (id) dispatch(update(formData));
    else dispatch(add(formData));

    setFormData({
      id: new Date().toString(),
      name: "",
      category: "Cardio",
      completed: false,
      duration: 0,
    });
    router.push("/(home)");
  };

  return (
    <View className="flex flex-1 justify-center items-center">
      <View className="gap-4 px-4 w-full">
        <Text className="text-xl font-bold text-center">Biểu mẫu bài tập</Text>
        <Text className="text-lg">Thông tin chung</Text>
        <TextInput
          label={"Tiêu đề"}
          value={formData.name}
          onChangeText={(v) => setFormData({ ...formData, name: v })}
        />
        <TextInput
          label={"Thời lượng"}
          value={formData.duration.toString()}
          onChangeText={(v) =>
            setFormData({
              ...formData,
              duration: isNaN(Number(v)) ? 0 : Number(v),
            })
          }
        />
        <Text className="text-lg ">Loại bài tập</Text>
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
          <Button mode="contained" onPress={handleSubmit}>
            Lưu
          </Button>
        </RadioButton.Group>
      </View>
    </View>
  );
};

export default FormPage;
