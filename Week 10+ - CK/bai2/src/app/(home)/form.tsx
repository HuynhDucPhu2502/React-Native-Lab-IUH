import { View, Text, PushNotificationIOS } from "react-native";
import React, { useCallback, useState } from "react";
import { add, update, useAppDispatch } from "@/core/store";
import { useFetch } from "@/core/useFetch";
import { GroceryItem } from "@/core/types";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";

const FormPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { isLoading, GET, POST, PUT } = useFetch();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState<GroceryItem>({
    id: "",
    name: "",
    category: "",
    bought: false,
    quantity: 0,
    created_at: new Date().toString(),
  });

  useFocusEffect(
    useCallback(() => {
      if (id) {
        GET<GroceryItem>(`/grocery-items/${id}`).then((res) =>
          setFormData(res)
        );
      }
    }, [id])
  );

  const handleSubmit = () => {
    if (!formData.name || !formData.category || !formData.quantity) {
      alert("Vui lòng nhập đủ");
      return;
    }

    if (id)
      PUT(`/grocery-items/${formData.id}`, formData).then(() =>
        dispatch(update(formData))
      );
    else POST("/grocery-items", formData).then(() => dispatch(add(formData)));

    router.back();
  };

  if (isLoading) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <ActivityIndicator animating size={"large"} />
      </View>
    );
  }

  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-xl font-bold">Thông tin hàng cần mua</Text>
      <View className="px-4 gap-4 w-full">
        <TextInput
          label={"Name"}
          value={formData.name}
          onChangeText={(v) => setFormData({ ...formData, name: v })}
        />
        <TextInput
          label={"Category"}
          value={formData.category}
          onChangeText={(v) => setFormData({ ...formData, category: v })}
        />
        <TextInput
          label={"Quantity"}
          value={formData.quantity.toString()}
          keyboardType="numeric"
          onChangeText={(v) =>
            setFormData({
              ...formData,
              quantity: isNaN(Number(v)) ? 0 : Number(v),
            })
          }
        />
        <Button mode="contained" onPress={handleSubmit}>
          Save
        </Button>
        <Button mode="outlined" onPress={() => router.back()}>
          Back
        </Button>
      </View>
    </View>
  );
};

export default FormPage;
