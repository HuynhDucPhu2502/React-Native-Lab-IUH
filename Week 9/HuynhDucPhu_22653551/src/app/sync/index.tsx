import React, { useState } from "react";
import { View, Alert } from "react-native";
import { Button, TextInput, Text, ActivityIndicator } from "react-native-paper";
import { useSQLiteContext } from "expo-sqlite";
import { syncTransactions } from "@/utils/sync";
import { useRouter } from "expo-router";

export default function SyncPage() {
  const db = useSQLiteContext();
  const router = useRouter();

  const [apiUrl, setApiUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSync = async () => {
    if (!apiUrl.trim()) {
      Alert.alert("Thiếu API", "Vui lòng nhập link mockapi.io.");
      return;
    }

    try {
      setLoading(true);
      setStatus("Đang đồng bộ...");
      await syncTransactions(db, apiUrl);
      setStatus("✅ Đồng bộ thành công!");
      Alert.alert("Thành công", "Đồng bộ dữ liệu lên API thành công!");
    } catch (err) {
      console.error(err);
      setStatus("❌ Lỗi đồng bộ!");
      Alert.alert("Lỗi", "Không thể đồng bộ. Kiểm tra lại đường dẫn API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold text-center mb-6">
        🔄 Đồng bộ dữ liệu
      </Text>

      <TextInput
        label="Mock API URL"
        value={apiUrl}
        onChangeText={setApiUrl}
        placeholder="https://yourproject.mockapi.io/api/v1"
        className="mb-4"
        mode="outlined"
      />

      <Button
        mode="contained"
        className="bg-blue-600 my-4"
        onPress={handleSync}
        disabled={loading}
      >
        {loading ? "Đang đồng bộ..." : "Đồng bộ ngay"}
      </Button>

      {loading && <ActivityIndicator animating color="blue" />}
      {!!status && (
        <Text className="text-center mt-4 text-base font-medium">{status}</Text>
      )}
    </View>
  );
}
