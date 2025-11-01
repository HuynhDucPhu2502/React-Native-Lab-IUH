import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Table } from "../App";

interface SeatProps {
  table: Table;
  onClick: (seatNumber: number) => void;
}

const TableSeat = ({ table, onClick }: SeatProps) => {
  let tableStatusColor = "green";
  if (table.tableNumber === 13 || table.tableNumber === 15)
    tableStatusColor = "gray";
  else if (table.isSelected) tableStatusColor = "red";

  return (
    <Pressable
      onPress={() => onClick(table.tableNumber)}
      style={[style.cardContainer, { backgroundColor: tableStatusColor }]}
    >
      <Text style={style.title}>{table.tableNumber}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 5,
    aspectRatio: 1,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default TableSeat;
