import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import StudentInfo from "./components/StudentInfo";
import TableList from "./components/TableList";

export interface Table {
  tableNumber: number;
  isSelected: boolean;
}

const initTable: Table[] = Array.from({ length: 20 }, (_, i) => ({
  tableNumber: i + 1,
  isSelected: i + 1 === 13 || i + 1 === 15 ? true : false,
}));

export default function App() {
  const [tables, setTables] = useState<Table[]>(initTable);

  const handleSelect = (tableNumber: number) => {
    const table = tables.find((x) => x.tableNumber === tableNumber);
    if (!table) return;

    if (tableNumber === 13 || tableNumber === 15) {
      Alert.alert("Thông báo", `Bàn ${tableNumber} này đã có người đặt`);
      return;
    }

    setTables((prev) => {
      return prev.map((x) => {
        if (x.tableNumber === tableNumber) {
          return {
            ...x,
            isSelected: !x.isSelected,
          };
        }

        return x;
      });
    });
  };

  return (
    <>
      <StatusBar />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StudentInfo />
          <TableList tables={tables} handleSelect={handleSelect} />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
});
