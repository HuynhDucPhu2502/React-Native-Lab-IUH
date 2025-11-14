import { View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import { Transaction } from "@/types/transaction";
import { Button, RadioButton, TextInput } from "react-native-paper";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { createTransaction, getById, updateTransaction } from "@/db";

const TransactionFormScreen = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();

  const [formData, setFormData] = useState<Transaction>({} as Transaction);
  const [type, setType] = useState("Income");

  const router = useRouter();
  const db = useSQLiteContext();

  useFocusEffect(
    useCallback(() => {
      if (id) {
        getById(db, Number(id)).then((res) => {
          setFormData(res);
          setType(res.type);
        });
      }
    }, [])
  );

  const handleSave = async () => {
    if (!formData.title && !formData.amount && !formData.type) return;

    const payload: Transaction = {
      ...formData,
      type: type === "Income" ? "Income" : "Expense",
    };

    if (id) await updateTransaction(db, payload);
    else await createTransaction(db, payload);

    handleReset();
    router.navigate("(tabs)/list");
  };

  const handleReset = () => {
    setFormData({} as Transaction);
    setType("Income");
  };

  return (
    <View className="flex flex-1 justify-center items-center">
      <View className="px-4 w-full gap-4">
        <Text className="text-lg">New Transaction</Text>
        <TextInput
          label="Title"
          onChangeText={(value) =>
            setFormData((prev) => ({ ...prev, title: value }))
          }
          value={formData.title}
        ></TextInput>
        <TextInput
          label="Amount"
          keyboardType="number-pad"
          onChangeText={(value) =>
            setFormData((prev) => ({ ...prev, amount: Number(value) }))
          }
          value={formData.amount ? formData.amount.toString() : ""}
        ></TextInput>
        <RadioButton.Group value={type} onValueChange={setType}>
          <Text className="text-lg">Transaction Type</Text>
          <RadioButton.Item label="Income" value="Income"></RadioButton.Item>
          <RadioButton.Item label="Expense" value="Expense"></RadioButton.Item>
        </RadioButton.Group>
        <Button mode="contained" onPress={handleSave}>
          Save
        </Button>
      </View>
    </View>
  );
};

export default TransactionFormScreen;
