import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { getMonthlyStatistics } from "@/db/db";
import { StackedBarChart } from "react-native-chart-kit";

export default function StatisticsScreen() {
  const db = useSQLiteContext();
  const [stats, setStats] = useState<
    { month: string; income: number; expense: number }[]
  >([]);

  const fetchStats = useCallback(async () => {
    const res = await getMonthlyStatistics(db);
    setStats(res);
  }, [db]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const months = stats.map((s) => s.month);

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-center mb-4">
        📊 Thống kê Thu – Chi theo tháng
      </Text>

      {stats.length === 0 ? (
        <Text className="text-center text-gray-500 mt-6">Chưa có dữ liệu</Text>
      ) : (
        <StackedBarChart
          hideLegend={false}
          data={{
            labels: months,
            legend: ["Thu", "Chi"],
            data: stats.map((s) => [s.income, s.expense]),
            barColors: ["#4ade80", "#f87171"],
          }}
          width={Dimensions.get("window").width - 16}
          height={280}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#f9fafb",
            backgroundGradientTo: "#f9fafb",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: () => "#333",
          }}
          style={{ borderRadius: 12 }}
        />
      )}
    </ScrollView>
  );
}
