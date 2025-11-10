import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { Button, RadioButton, TextInput, Text } from "react-native-paper";
import { TransactionItem } from "@/types/TransactionItem";
import { addTransaction, getTransactionById, updateTransaction } from "@/db/db";

export default function FormPage() {
  const router = useRouter();
  const db = useSQLiteContext();
  const { id } = useLocalSearchParams<{ id?: string }>();

  const [formData, setFormData] = useState<TransactionItem>({
    id: null,
    title: "",
    amount: 0,
    createdAt: new Date(),
    type: "INCOME",
    isDeleted: false,
  });

  useEffect(() => {
    if (id) {
      (async () => {
        const item = await getTransactionById(db, Number(id));
        if (item) setFormData(item);
      })();
    }
  }, [id]);

  const onSave = async () => {
    if (formData.id) await updateTransaction(db, formData);
    else await addTransaction(db, formData);
    router.back();
  };

  return (
    <View className="flex flex-1 p-4 gap-4">
      <Text className="text-xl font-bold text-center">
        {id ? "Edit Transaction" : "Add Transaction"}
      </Text>
      <TextInput
        label="Title"
        value={formData.title}
        onChangeText={(v) => setFormData((p) => ({ ...p, title: v }))}
      />
      <TextInput
        label="Amount"
        value={formData.amount.toString()}
        onChangeText={(v) =>
          setFormData((p) => ({ ...p, amount: Number(v) || 0 }))
        }
        keyboardType="numeric"
      />
      <RadioButton.Group
        onValueChange={(value) =>
          setFormData((p) => ({ ...p, type: value as "INCOME" | "EXPENSE" }))
        }
        value={formData.type}
      >
        <View className="flex-row gap-4 items-center">
          <RadioButton value="INCOME" />
          <Text>Income</Text>
          <RadioButton value="EXPENSE" />
          <Text>Expense</Text>
        </View>
      </RadioButton.Group>
      <Button mode="contained" onPress={onSave}>
        {id ? "Update" : "Save"}
      </Button>
    </View>
  );
}
