import { Pressable, StyleSheet, Text, View } from "react-native";
import { Seat } from "../App";

interface SeatAppProps {
  seat: Seat;
  onClick: (seatNumber: number) => void;
}

const SeatApp = ({ seat, onClick }: SeatAppProps) => {
  let seatStatusColor = "blue";
  if (seat.isBooked) seatStatusColor = "gray";
  else if (seat.isSelected) seatStatusColor = "red";

  return (
    <Pressable
      onPress={() => onClick(seat.seatNumber)}
      style={[style.cardContainer, { backgroundColor: seatStatusColor }]}
    >
      <Text style={style.seatTitle}>{seat.seatNumber}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "blue",
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  seatTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SeatApp;
