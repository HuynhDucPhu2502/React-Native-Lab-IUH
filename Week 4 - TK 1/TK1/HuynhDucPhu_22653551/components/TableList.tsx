import React from "react";

import { FlatList, StyleSheet, Text } from "react-native";
import { Table } from "../App";
import TableSeat from "./TableSeat";

interface TableListProps {
  tables: Table[];
  handleSelect: (seatNumber: number) => void;
}

const TableList = ({ handleSelect, tables }: TableListProps) => {
  const selectedTable = tables
    .filter((x) => x.isSelected && x.tableNumber !== 13 && x.tableNumber !== 15)
    .map((x) => x.tableNumber)
    .join(", ");

  return (
    <>
      <Text style={styles.title}>Đặt bàn tại nhà hàng</Text>
      <FlatList
        data={tables}
        numColumns={4}
        keyExtractor={(item) => item.tableNumber.toString()}
        renderItem={({ item }) => (
          <TableSeat onClick={handleSelect} table={item} />
        )}
      ></FlatList>
      <Text style={{ paddingHorizontal: 10 }}>Bàn đã đặt: {selectedTable}</Text>
    </>
  );
};

export default TableList;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});
